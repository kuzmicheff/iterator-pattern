"use strict"; 

// The iterator pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

var Iterator = function (items) {

    this.index = 0;
    this.items = items;
}

Iterator.prototype = {

    getCurrent: function() {

        return this.items[this.index];
    },

    getFirst: function() {

        this.resetIndex();
        return this.getNext();
    },

    getNext: function() {

        return this.items[this.index++];
    },

    checkNext: function() {

        return this.index <= this.items.length;
    },

    resetIndex: function() {

        this.index = 0;
    },

    iterateObject: function(callback) {

        for (var item = this.getFirst(); this.checkNext(); item = this.getNext()) {

            callback(item);
        }
    }
}

function testIterator() {

    var items = ["one", 2, "circle", true, "Applepie"];
    var iterator = new Iterator(items);

    // using for loop

    for (var item = iterator.getFirst(); iterator.checkNext(); item = iterator.getNext()) {

        console.log(item);
    }

    console.log("");

    // using Iterator's each method

    iterator.iterateObject(function(item) {

        console.log(item);
    });
}

testIterator();