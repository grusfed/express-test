function catsCtrl(catsSrv, cats) {
  const vm = this;
  vm.data = { cats };
  vm.deleteCat = deleteCat;

  function deleteCat(id) {
    catsSrv
      .deleteCat(id)
      .then(cats => vm.data.cats = cats,  console.log);
  }
}
export { catsCtrl }
