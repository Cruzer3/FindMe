angular.module('FindMe.services', [])

.factory('Histories', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var histories = [{
    id: 2,
    name: 'Mädchen Flohmarkt',
    city: 'Stuttgart',
    maxValue: '20',
    currentValue: '14',
    type: 'Group',
    coupon: 'Kostenlose Stilberatung',
    logo: 'img/maedchenflohmarkt_logo.jpg',
    tasks: [
    {
      todo: 'Foto von Auto'
    },
     {
      todo: 'Foto von Auto'
    },
     {
      todo: 'Foto von Auto'
    },
     {
      todo: 'Foto von Auto'
    },
     {
      todo: 'Foto von Auto'
    },
     {
      todo: 'Foto von Auto'
    }]
  },{
    id: 0,
    name: 'Objectz',
    city: 'Stuttgart',
    maxValue: '10',
    currentValue: '2',
    type: 'Solo',
    coupon: '5€ Gutschein',
    logo: 'img/objectz_logo.jpg',
    tasks: [
    {
      todo: 'Foto von Auto'
    },
     {
      todo: 'Foto von Auto'
    },
     {
      todo: 'Foto von Auto'
    },
     {
      todo: 'Foto von Auto'
    },
     {
      todo: 'Foto von Auto'
    },
     {
      todo: 'Foto von Auto'
    },
     {
      todo: 'Foto von Auto'
    },
     {
      todo: 'Foto von Auto'
    }]
  }, {
    id: 1,
    name: 'Super Juju',
    city: 'Stuttgart',
    maxValue: '10',
    currentValue: '0',
    type: 'Solo',
    coupon: 'Kostenlose Postkarte',
    logo: 'img/superjuju_logo.jpg',
    tasks: [
    {
      todo: 'Foto von Auto'
    },
     {
      todo: 'Foto von Auto'
    },
     {
      todo: 'Foto von Auto'
    },
     {
      todo: 'Foto von Auto'
    },
     {
      todo: 'Foto von Auto'
    },
     {
      todo: 'Foto von Auto'
    },
     {
      todo: 'Foto von Auto'
    },
     {
      todo: 'Foto von Auto'
    },
     {
      todo: 'Foto von Auto'
    },
     {
      todo: 'Foto von Auto'
    }]
  }];

  return {
    all: function() {
      return histories;
    },
    remove: function(history) {
      histories.splice(histories.indexOf(history), 1);
    },
    get: function(offerId) {
      for (var i = 0; i < histories.length; i++) {
        if (histories[i].id === parseInt(offerId)) {
          return histories[i];
        }
      }
      return null;
    }
  };
});
