# Are We Alone?
<!-- Photo by Lucas Pezeta from Pexels -->
<img src=https://github.com/tn64/UFOs/blob/main/resources/pexels-lucas-pezeta-2034892.jpg>

# Overview

The purpose of this exercise was to create a webpage for UFOlogists to search sightings by date, city, state, country and shape. This would provide those researchers the ability to perform in-depth analysis of UFO sightings using muliple criteria simultaneously.

# Results

When a researcher initially visits the webpage, the page displays the entire database of UFO sightings in the table.

<img src="https://github.com/tn64/UFOs/blob/main/resources/Main.png">
</br>


The power of the filtering available on the page shows as the user enters criteria into the search fields. For instance, visitors can search the database by date:

<img src="https://github.com/tn64/UFOs/blob/main/resources/Date.png">
</br>

They can filter the data by city:

<img src="https://github.com/tn64/UFOs/blob/main/resources/City.png">
</br>

They can filter the data by state:

<img src="https://github.com/tn64/UFOs/blob/main/resources/State.png">
</br>

They can filter the data by country:

<img src="https://github.com/tn64/UFOs/blob/main/resources/Country.png">
</br>

And, finally, they can filter the data by the shape of the UFO:

<img src="https://github.com/tn64/UFOs/blob/main/resources/Shape.png">
</br>


# Summary
The webpage is attractive and the search functions work as intended, however there is an opportunity to significantly improve the user experience by upgrading the search functionality. Specifically, there are two ways this could be improved.

1. Recommendation 1: Change the code both to accept and to force users to enter by mm/dd/yyyy</br>
As currently configured (and shown below) the search will only display results when entered as m/dd/yyyy for January through September. Adding an initial 0 to those months (a common date format) will result in no results being returned. The code for this box should be updated and then force the mm/dd/yyyy format.

<img src="https://github.com/tn64/UFOs/blob/main/resources/Date_Format.png">
</br>

2. Recommendation 2: Use dropdown menus instead of text boxes for the other search boxes</br>
There are a number of problems with using text boxes to perform searches that fit with the data.js file. For instance (and as shown below) when using uppercase letters in the text boxes. Also, when searching by a city or country that is not in the database, the search will return no results. Additionally (again shown below), the user may not know the "shapes" available in the database. Entering a shape not found in the database will return no results.
</br>
Dropdown menus would solve these problems. The menus would present only options that are in the database and provide for more efficient searching of the database.
</br>
<img src="https://github.com/tn64/UFOs/blob/main/resources/State_Uppercase.png">

<img src="https://github.com/tn64/UFOs/blob/main/resources/Bad_Shape.png">
</br>
</br>
<img src="https://github.com/tn64/UFOs/blob/main/resources/nasa_image.png">

