CREATE TABLE emissions (
	industry_type INT,
	total_direct_emissions FLOAT,
	state_population INT,
	state_gdp_per_capita FLOAT,
	state_policies_incentives INT,
	USDA_energy_invest_unit INT,
	USDA_energy_invest FLOAT, 
	renewables_percent FLOAT
);

DROP TABLE emissions;

SELECT * FROM emissions;

				