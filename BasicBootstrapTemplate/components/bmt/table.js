function defineAttributes(types){
  return {
    "id": types.string,
    "column": {
      "title": types.string.defaultValue(''),
      "content": types.mandatory.innerHTML
    },
    "list": types.boundVariable
  }
}

function remove(indexToRemove){
    this.list.splice(indexToRemove, 1);
}