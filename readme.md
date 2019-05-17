### tfjs-vn-name-to-gender

This is a small project using `tensorflowjs`

The goal is to make a small app to predict the gender base on a person's name. It currently works only on vietnamese names. The accuracy of the trained model is 97%

### How it's made

1. Generate `dataset.csv` containing Name - Gender
2. Train the model using tensorflow (keras) - More details in `LSTM.ipynb`
3. Export the model to `model` folder (in JSON format)
4. Import it into `tensorflowjs` on web

### Changelog

**v2.0**: tokenize by charater instead of word

**v1.0**: initial version, tokenize by word

### Author

* ngxson (Nui Nguyen)
* Email: contact at ngxson dot com
* My website: https://ngxson.com
