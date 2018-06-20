'use strict';
/* global Item */

// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(item) {
    this.items.push(item);
  };
  
  const findAndUpdate = function(id, newData) {
    const item = this.items.find(item => item.id === id);
    console.log(Object.assign(item, newData));
  };
  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  const setError = function(message) {
    this.error = message;
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',
    error: null,

    addItem,
    findById,
    findAndUpdate,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
    setError
  };
  
}());
