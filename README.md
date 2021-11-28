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
```
Describe: Destination()

Test: It will initialize a Location object.
Code: new Destination();
Expected Output: { locations: { }}
```
```
Describe: Destination.prototype.assignId()

Test: It will take the current ID and increment it by 1.
Code: this.currentId += 1;
Expected Output: id: 1
```
```
Describe: Destination.prototype.addLocation()

Test: It will assign a unique ID to each new location.
Code: this.locations[location.id] = location;
Expected Output: location: "Cannon Beach", landmarks: "Haystack Rock", time: "Spring", notes: "Bring a raincoat!" id: 1
```
```
Describe: Location()

Test: It will create a new Location object with properties for name, landmarks, time, and notes.
Code: Location("Cannon Beach", "Haystack Rock", "Spring", "Bring a jacket!")
Expected Output: name: "Cannon Beach", landmarks: "Haystack Rock", time: "Spring", notes: "Bring a jacket!"
```
```
Describe: Destination.prototype.findLocation()

Test: It will search for a location using the unique id
Code: Destination.prototype.findLocation{}
Expected Output: name: "Cannon Beach", landmarks: "Haystack Rock", time: "Spring", notes: "Bring a jacket!", id: 1
```

## Setup/Installation Requirements
* Navigate to https://github.com/kpundt93/places
* Click on the green "Code" button and copy the repository URL or click on the copy button
* Open the terminal on your desktop
* Once in the terminal, use it to navigate to your desktop folder
* Once inside your desktop folder, use the command `git clone https://github.com/kpundt93/places`
* After cloning the project, navigate into it using the command `cd places`
* Use the command `git remote` to confirm the creation of the new local repository
* Open the project with the code editor of your choice


## Known Bugs
_No known bugs_

## License
_MIT License: https://opensource.org/licenses/MIT_

_Copyright (c) 2021 Katie Pundt, Kim Brannian_
