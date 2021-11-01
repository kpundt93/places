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
