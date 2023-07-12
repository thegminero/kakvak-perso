import ResultsPage from '../components/results-page.js';

class SampleSearchWithEvents {
  constructor() {
    this._initSearch();
  }

  _initSearch() {
    this.resultPage = new ResultsPage();
  }
}
const app = new SampleSearchWithEvents();
