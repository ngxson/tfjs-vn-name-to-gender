
(function ($) {
    var model = null

    async function init() {
        model = await tf.loadLayersModel('model_v2/model.json')
    }

    async function predict(vec) {
        var result = model.predict(tf.tensor([vec]))
        result = await result.array()
        result = result[0]
        console.log(result)
        return result[0] > result[1] ? 'Nam' : 'Nữ'
    }

    function toVector(name) {
        name = name.toLowerCase()
        vec = []
        for (var i in name) {
            vec.push(name.charCodeAt(i))
        }
        while (vec.length < 28) {
            vec.unshift(0)
        }
        while (vec.length > 28) {
            vec.shift()
        }
        return vec
    }

    function onClickPredict() {
        $('#result').html(`Xin chờ...`)
        var name = $('#input-name').val()
        var vec = toVector(name)
        var displayName = $("<div>").text(toTitleCase(name)).html()
        predict(vec).then(gender => {
            $('#result').html(`
                Tôi xin mạnh dạn đoán:
                <br/>
                Giới tính của ${displayName} là: <b>${gender}</b>
                <br/><br/>
            `)
        })
    }

    $('#predict').click(function() {
        requestAnimationFrame(() => $('#result').html(`Xin chờ...`))
        setTimeout(onClickPredict, 50)
    })

    $('form').submit(function(event) {
        event.preventDefault()
        requestAnimationFrame(() => $('#result').html(`Xin chờ...`))
        setTimeout(onClickPredict, 50)
    })

    init()
})(jQuery);

function toTitleCase(str) {
    return str.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')
}
