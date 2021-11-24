import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeRegressor
from sklearn.metrics import r2_score
import psycopg2
from config import db_password
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine

def predictions(industry_type, state_population, state_gdp_per_capita, state_policies_incentives, USDA_energy_invest_unit, USDA_energy_invest, renewables_percent):
    db_string = f"postgresql://postgres:{db_password}@127.0.0.1:5432/emissions_project"
    engine = create_engine(db_string)
    model_df = pd.read_sql_query('select * from emissions', con=engine)

    # Define the features set
    X = model_df.drop(columns=["total_direct_emissions"], axis=1)

    # Define the target set.
    y = model_df["total_direct_emissions"].values

    # Split the Data Into Training and Testing Sets into an 80/20 split
    X_train, X_test, y_train, y_test = train_test_split(X, y, train_size=0.80, random_state=42)

    # Scale the Training and Testing Data
    scaler = StandardScaler()

    # Fit and scale the Standard Scaler with the training data
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.fit_transform(X_test)

    #  Create the decision tree regressor instance
    model = DecisionTreeRegressor(random_state=0)

    # Fit Model
    model = model.fit(X_train_scaled, y_train)

    #predict the values using test data
    y_pred = model.predict(X_test_scaled)

    print(f'Training Score: {model.score(X_train_scaled, y_train)}')
    print(f' Testing Score: {model.score(X_test_scaled, y_test)}')

    # Test the balanced accuracy score of the model
    print(f'R2 Score: {r2_score(y_test, y_pred)}')

    return model.predict([[industry_type, state_population, state_gdp_per_capita, state_policies_incentives, USDA_energy_invest_unit, USDA_energy_invest, renewables_percent]])