from flask import Flask, render_template, request
from run_ml import predictions

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")

@app.route('/predict', methods = ['POST'])
def predict():
    #Get data from POST request
    if request.method == "POST":
        model_industry_type = request.form["type"]
        model_state_population = request.form["population"]
        model_state_gdp_per_capita = request.form["gdp"]
        model_state_policies_incentives = request.form["incentives"]
        model_USDA_energy_invest_unit = request.form["invest_unit"]
        model_USDA_energy_invest = request.form["invest"]
        model_renewables_percent = request.form["percent"]

        prediction = predictions(model_industry_type, 
                                model_state_population,
                                model_state_gdp_per_capita, 
                                model_state_policies_incentives, 
                                model_USDA_energy_invest_unit, 
                                model_USDA_energy_invest, 
                                model_renewables_percent)
        output = prediction[0]
        
        print(output)
        return render_template("results.html", results = output)

if  __name__ == "__main__":
    app.run()