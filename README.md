# _Places You've Been_

#### _Week 4, Monday Practice_

#### By _**Katie Pundt and Kim Brannian**_

## Technologies Used

* _HTML_
* _Markdown_
* _Git Repositories_
* _Javascript_
* _Bootstrap_
* _jQuery_

## Description

_View prompt here: https://www.learnhowtoprogram.com/intermediate-javascript/object-oriented-javascript/address-book-places-you-ve-been-to-do_

# Specs/Tests
Describe: Destination()
* _Test: It will initialize a Location object.
  Code: new Destination();
  Expected Output: { locations: { }}_

Describe: Destination.prototype.assignId 
* _Test: It will take the current ID and increment it by 1.
  Code: this.currentId += 1;
  Expected Output: id: 1_

Describe: Destination.prototype.addLocation
* _Test: It will assign a unique ID to each new location.
  Code: this.locations[location.id] = location;
  Expected Output: location: "Cannon Beach", landmarks: "Haystack Rock", time: "Spring", notes: "Bring a raincoat!" id: 1_

Describe: Location()
* _Test: It will create a new Location object with properties for name, landmarks, time, and notes.
  Code: Location("Cannon Beach", "Haystack Rock", "Spring", "Bring a jacket!")
  Expected Output: name: "Cannon Beach", landmarks: "Haystack Rock", time: "Spring", notes: "Bring a jacket!"_

  Describe; Destination.prototype.findLocation()
  *_Test: It will search for a location using the unique id
  Code: Destination.prototype.findLocation{}
  Expected Output: name: "Cannon Beach", landmarks: "Haystack Rock", time: "Spring", notes: "Bring a jacket!", id: 1

## Setup/Installation Requirements

* _Navigate to https://github.com/kpundt93/places
* _Click on the green "Code" button and copy the repository URL or click on the copy button_
* _Open the terminal on your desktop_
* _Once in the terminal, use it to navigate to your desktop folder_
* _Once inside your desktop folder, use the command "git clone https://github.com/kpundt93/places"_
* _After cloning the project, navigate into it using the command "cd places"_
* _Use the command "git remote" to confirm the creation of the new local repository_
* _Open the project with the code editor of your choice_

_Note: when using the commands listed above, do not include the quotation marks. They are used here for readability._

## Known Bugs

_No known issues_

## License
_MIT License: https://opensource.org/licenses/MIT_
_Copyright (c) 2021 Katie Pundt, Kim Brannian_

## Contact Information
_Katie Pundt, kzpundt@gmail.com_
_Kim Brannian, brannian@gmail.com_