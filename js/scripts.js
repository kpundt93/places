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

$(document).ready(function() {
  $("#new-location").submit(function(event) {
    event.preventDefault();

    const location = $("#location").val();
    const landmark = $("#landmark").val();
    const time = $("#time").val();
    const notes = $("#notes").val();

    $("#output").append("<li>" + location + "</li>");
    $("#output").append("<li>" + landmark + "</li>");
    $("#output").append("<li>" + time + "</li>");
    $("#output").append("<li>" + notes + "</li>");
  });
});