angular.module('FindMe.services', [])

.factory('Histories', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var histories = [{
    id: 2,
    name: 'Mädchen Flohmarkt',
    city: 'Stuttgart',
    maxValue: '20',
    currentValue: '17',
    type: 'Group',
    coupon: 'Kostenlose Stilberatung',
    logo: 'img/maedchenflohmarkt_logo.jpg',
    tasks: [
    {
      todo: 'Ein Rotes Kleid',
      me: false,
      friend: false,
      id: 1
    },
     {
      todo: 'Gefällt mir drücken auf Facebook Seite',
      me: true,
      friend: false,
      id: 2
    },
     {
      todo: 'Account auf Homepage erstellen',
      me: true,
      friend: false,
      id: 3
    }],
    QRCode: ''
  },{
    id: 0,
    name: 'Objectz',
    city: 'Stuttgart',
    maxValue: '10',
    currentValue: '8',
    type: 'Solo',
    coupon: '5€ Gutschein',
    logo: 'img/objectz_logo.jpg',
    tasks: [
    {
      todo: 'Rotes Möbelstück',
      id: 1
    },
     {
      todo: 'Blaue Krawatte',
      id: 2
    }],
    QRCode: ''
  }, {
    id: 1,
    name: 'Super Juju',
    city: 'Stuttgart',
    maxValue: '10',
    currentValue: '10',
    type: 'Solo',
    coupon: 'Kostenlose Postkarte',
    logo: 'img/superjuju_logo.jpg',
    tasks: [],
    QRCode: 'img/QR-Code.jpg'
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
