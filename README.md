# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

1. For this tableview, when a row with a doctor is clicked, a modal will appear at the bottom with the doctor's info, as well as similar doctors on the list.
2. Users can also browse through each category of the table by using the filter at the top of each column in the table.

## Assumptions

1. Similar doctors displayed are those in the same specialty area as the one clicked.
2. The ordering of the similar doctors is as is in the table, not by rating or alphabetical

## Data Used

 https://www.medicare.gov/care-compare/results?searchType=Physician&page=1&query=Diagnostic%20radiology&city=College%20Station&state=TX&zipcode=77840&radius=15&physicianSpecialty=Diagnostic%2520radiology&sort=closest&tealiumEventAction=Universal%20Header%20-%20SEARCH_TYPE%20-%20Search&tealiumSearchLocation=search%20bar%20-%20suggested%20search%20result
 
 (Doctor ratings were made up for this project)
 
 ## Time Allocation
 
 Before beginning this project, I estimated 2 hours. However, I definitely went over this time allotment, to almost three hours. While creating the table itself did not take much time, deciding how to display the similar doctors when one is selected took up the bulk of my time. Lastly, troubleshooting hosting the site live on Heroku added a bit more unforseen time commitment, however, I was able to find a solution. 
 
 Given more time on this project, I would go back and create a function that sorts through all similar doctors, to display them in an order of increasing rating to decreasing rating. Other improvements I would want to make with more time would be making the modal that pops up stand out more. Finally, I would add some styling to the table for a better user experience, such as center it and the data, and spacing the cells out more across the window view.
 
 ## Site hosting
 
 https://similar-doctors.herokuapp.com/
