// Business logic for Destination
function Destination() {
  this.locations = {};
  this.currentId = 0;
}

Destination.prototype.addLocation = function(location) {
  location.id = this.addId();
  this.locations[location.id] = location;
};

Destination.prototype.addId = function() {
  this.currentId += 1;
  return this.currentId;
};

// Business logic for Locations
function Location(name, landmarks, time, notes) {
  this.name = name;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}

Destination.prototype.findLocation = function(id) {
  if(this.locations[id] !=undefined) {
    return this.locations[id];
  }
  return false;
};

// UI Logic
let destination = new Destination();

$(document).ready(function() {
  $("form#new-location").submit(function(event) {
    event.preventDefault();

    const location = $("input#new-location-name").val();
    const landmark = $("input#new-landmark").val();
    const time = $("input#new-time").val();
    const notes = $("input#new-notes").val();

    let newLocation = new Location(location, landmark, time, notes);
    destination.addLocation(newLocation);
    console.log(destination.locations);

    $("#show-location").append("<li>" + location + "</li>");
    $("#show-location").append("<li>" + landmark + "</li>");
    $("#show-location").append("<li>" + time + "</li>");
    $("#show-location").append("<li>" + notes + "</li>");
  });
});
