# Carbon Emission Analysis

## Background
Greenhouse gases trap heat and make the planet warmer. 
Human activities are responsible for almost all of the increase in greenhouse gases in the atmosphere over the last 150 years.
Burning fossil fuels for electricity, heat, and transportation is the largest source of greenhouse gas emissions from human activities in the United States.

To analyze US GHG emissions, we focused on datasets from the United States Environmental Agency (EPA). 
The EPA tracks total U.S. emissions by publishing an inventory of the US Greenhouse Gas Emission by facility. 
This annual report estimates the total national greenhouse gas emissions and removals associated with human activities across the United States. 

https://www.epa.gov/ghgemissions/global-greenhouse-gas-emissions-data


https://www.epa.gov/ghgreporting/ghgrp-reported-data


Since 1990, gross U.S. greenhouse gas emissions have increased by 2 percent. 
From year to year, emissions can rise and fall due to changes in the economy, the price of fuel, and other factors. 
In 2019, U.S. greenhouse gas emissions decreased compared to 2018 levels. 
The decrease was primarily in CO2 emissions from fossil fuel combustion, which was a result of multiple factors, including a decrease in total energy use and a continued shift from coal to less carbon intensive natural gas and renewables. 
Industry reporting with the EPA is focusing their research on improving CO2 emissions, which have significant impacts on climate warming. CO2 is the largest greenhouse gas emission, in terms of quantity.


Our group has chosen to study CO2 emissions in the US in order to understand trends in climate change and potential for carbon capture implementation.
At the end of the project, we would like to propose a basic tool, which could be used to identify basins where the emissions are high enough and the economic dynamism could support the deployment of a carbon capture investment.



_With our data analysis project, we hope to answer the following questions:_

• Where are the main CO2 emitters located?

• Based on emissions from the past ten years, what are some possible trends in the CO2 emissions in the near future?

• Does the increase or decrease of industry types influence the emission rate?

• How do the investments made by the US Department of Energy and renewable policies impact CO2 emissions?

## Results

### Analysis of Global Emissions: Industry Type, Location, and Trends

After analyzing global emissions from the EPA dataset, we found that there is a decrease in direct emissions over the last decade of approximately 800 M. 

<img width="806" alt="Screen Shot 2021-11-23 at 8 44 04 PM" src="https://user-images.githubusercontent.com/85946042/143162090-724939bb-8bbc-4dcb-b752-c1c922ed22b0.png">

The reduction of emissions is mainly supported by the decline of coal usage in the US in the past decade. The natural gas consumption is stable. The petroleum product consumption is also in decline. 

<img width="1440" alt="Screen Shot 2021-11-21 at 5 31 39 PM" src="https://user-images.githubusercontent.com/85946042/142783312-f41431e3-e83a-4fe1-ac62-23f7a6712b45.png">

<img width="715" alt="Screen Shot 2021-11-21 at 5 32 14 PM" src="https://user-images.githubusercontent.com/85946042/142783335-028b164f-785d-4b68-ba2f-9529351a88f0.png">

We also analyzed the impact of industry type on emissions. The top 5 industry types of emitters are: Utilities, Chemical Manufacturing, Waste Management & Remediation Service, Oil & Gas Extraction, and Pipeline Transportation. The Utilities industry, which is the most represented industry type of the emitters and the industry with the highest emissions, is mainly comprised of power plants.


<img width="810" alt="Screen Shot 2021-11-23 at 8 40 37 PM" src="https://user-images.githubusercontent.com/85946042/143161684-b1281b8e-bae5-485b-8897-429e21f8d63d.png">


Both direct emitter count and total direct emissions have decreased over the past ten years, but with varying scales. Total emissions have decreased by roughly 25% over the past 10 years, while the number of emitters has only decreased by about 6%. We mapped the locations of the emitters along with their emissions from 2020 in order to understand areas of high emission concentration. The main emitter states are Texas, Florida, and Louisiana. The global reduction in emissions for these main states was between 7 and 20% for the last five years. There was also a reduction of 27.6% of emissions in Illinois in the past 5 years. 


<img width="840" alt="Screen Shot 2021-11-21 at 5 32 35 PM" src="https://user-images.githubusercontent.com/85946042/142783339-0298e9cc-05a4-49e8-8f14-9f062d14ba0c.png">

Carbon Emissions Mapping Demo: https://api.mapbox.com/styles/v1/lscherger/ckvis793c2jnz14w1o4fjly2k.html?title=view&access_token=pk.eyJ1IjoibHNjaGVyZ2VyIiwiYSI6ImNrdGF1cnpibjAxbW4yb3JybnV5am96dGoifQ.1KM5whj2lhENCQdKgm1QEQ&zoomwheel=true&fresh=true#2.56/33.34/-106.1/0/21

<img width="1187" alt="Screen Shot 2021-11-14 at 10 15 29 PM" src="https://user-images.githubusercontent.com/85946042/143161860-31d2e805-c8fd-46b4-984d-4b1831fcf29f.png">
 
 
We also wanted to understand how carbon capture opportunity could change based on location. The cost of CO2 capture is very high due to capture and storage costs, so future carbon capture opportunities should be in the same regions as carbon capture projects already deployed. We found that the main carbon capture projects in the US are located in Texas, Ohio, Kentucky and Illinois. 


<img width="1437" alt="Screen Shot 2021-11-23 at 8 46 57 PM" src="https://user-images.githubusercontent.com/85946042/143162403-b8f1e509-d837-439f-98ef-5d40879c8c32.png">


Geocube, National Energy Technology Laboratory
https://edx.netl.doe.gov/geocube/#natcarbviewer


### Predicting Carbon Emissions Using Machine Learning

One of our analysis questions focused on predicting emissions in the near future based on emission data from the past ten years. After graphing the frequency of total direct emissions, we noticed the emissions were skewed right; there was a higher frequency of lower emissions compared to the frequencies of high emissions. To transform the data into a format that could be used for a machine learning model, we performed a log transform, which made the total direct emissions frequency graph normally distributed. Next, we evaluated several machine learning models using the R2 and RSME scores based on a set of 80% training data and 20% testing data. Linear DecisionTree Regression, Linear Regression and RandomForest Regressor Models were evaluated, and the RandomForest Regressor Model achieved the best R2 and RSME scores. We used the decision tree model because it can handle both categorical and numerical data. We obtained an R² score of 0.9402593945071012 and an RMSE of 1.3644498267257446, normally it’s value must be between 0 to 100%. 0% indicates that model explains none of the variability of the response data and 100% indicates that the model explains all the variability of the response data.


The results of our RandomForest machine learning model were displayed on a dashboard using the Flask App. 


## Summary

After conducting an analysis of carbon emitters in the US from 2011-2020, we were able to identify the industry types with the highest emissions (Utilities (power plants), Chemical Manufacturing, Waste Management & Remidiation Services) and the locations with the highest emissions (Texas, Louisiana, Florida). Additionally, we saw a decrease in the total emissions from 2011 to 2020 by approximately 25%. There was also a slight decrease (-6%) in the number of emitters. Because the amount of emitters did not change as much, the decrease in emissions can most likely be attributed to the decrease in coal usage. The highest emission by fuel type came from natural gas for each year in the dataset. Petroleum product consumption is also in stable decline, as seen by the decrease in emissions. Looking forward to the future, we studied carbon capture opportunities. Because of the high cost of implementing carbon capture, there is evidence to suggest that future business opportunities for CCUS projects should be in the vicinity of CCUS projects already deployed. The main projects in the US are currently located in Texas, Ohio, Kentucky and Illinois.

Unfortunately, our dataset was not a good fit as it provided us with a negative R2 value in every model. We have identified limitations of our project and associated them with future possible improvements to the results. First, our dataset had a limited amount of features per facility. With more features, there could be more opportunities to find stronger correlations and minimize confounding variables. Next, there was only one decade of data. For a more accurate prediction, it would be beneficial to see more years of data. Also, macroeconomic indicators by state added with low correlations. The limitation that resulted from a smaller, less detailed dataset, was that we had a very low accuracy score. 

To compare our model with a more accurate model, we studied the Bloomberg ML model, which had a large dataset of over 13,000 companies from the past two decades. Each company had more than 1000 features and various areas were covered, such as environmental, social, financial, and company governance. These features gave the project a strong interdisciplinary perspective, which is useful when finding correlations that might not be obvious immediately. 

In a future iteration, we would set a good foundation for a machine learning model by creating a larger dataset with more years and facility features. 



## Google Slides presentation:

https://docs.google.com/presentation/d/16130ry8vgYDdzpWbqL5rkDUw5KjI1PNz1XOkMpDAiHM/edit?usp=sharing
