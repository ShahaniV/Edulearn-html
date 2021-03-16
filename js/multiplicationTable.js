function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {if (window.CP.shouldStopExecution(0)) break;var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}window.CP.exitedLoop(0);return target;};return _extends.apply(this, arguments);} // spinner element extracted from react spinkit
// https://github.com/KyleAMathews/react-spinkit
class Spinner extends React.Component {

  constructor(props) {
    super(props);
    this.displayName = 'SpinKit';
  }

  render() {
    const classes = classNames({
      'fade-in': !this.props.noFadeIn,
      spinner: this.props.overrideSpinnerClassName === '',
      [this.props.overrideSpinnerClassName]: !!this.props.overrideSpinnerClassName,
      [this.props.className]: !!this.props.className });


    const props = Object.assign({}, this.props);
    delete props.spinnerName;
    delete props.noFadeIn;
    delete props.overrideSpinnerClassName;
    delete props.className;

    let spinnerEl;
    switch (this.props.spinnerName) {
      case 'wandering-cubes':
        spinnerEl =
        React.createElement("div", _extends({}, props, { className: `wandering-cubes ${classes}` }),
        React.createElement("div", { className: "cube1" }),
        React.createElement("div", { className: "cube2" }));


        break;}

    return spinnerEl;
  }}


Spinner.propTypes = {
  spinnerName: React.PropTypes.string.isRequired,
  noFadeIn: React.PropTypes.bool,
  overrideSpinnerClassName: React.PropTypes.string,
  className: React.PropTypes.string };


Spinner.defaultProps = {
  spinnerName: 'three-bounce',
  noFadeIn: false,
  overrideSpinnerClassName: '' };


class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wikiSummary: null,
      wikiImage: null };


    this.checkKeycode = this.checkKeycode.bind(this);

  }

  componentDidMount() {

    // listen for the escape key and close modal if it's heard
    window.addEventListener('keydown', this.checkKeycode);

    // make a call to wikipedia using b-jsonp library

    // pull the last bit of the wiki url off 
    let regex = /wiki\/(.*)/g;
    let url = this.props.wiki;
    let wikiTitle = regex.exec(url)[1];

    // build the url to send the request to
    const wikiSummaryUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${wikiTitle}&format=json`;

    // a function to update the modal's state
    const updateWikiSummary = data => {
      this.setState({
        wikiSummary: data });

    };

    // get first sentence of wiki page
    jsonp(wikiSummaryUrl, function (err, response) {
      if (wikiTitle === response[0]) {
        updateWikiSummary(response[2][0]);
      } else {
        console.log(response);
      }
    });

    // get an image from the wiki page

    const wikiImageUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${wikiTitle}&prop=pageimages&format=json&pithumbsize=100`;

    // a function to update the modal's state
    const updateWikiImage = data => {
      this.setState({
        wikiImage: data });

    };

    // get thumbnail image from wiki page
    jsonp(wikiImageUrl, function (err, response) {
      let pageId = Object.keys(response.query.pages);
      updateWikiImage(response.query.pages[pageId].thumbnail.source);
    });

  }

  componentWillUnmount() {
    // remove the escape-key-closes-the-modal listener
    window.removeEventListener('keydown', this.checkKeycode);
  }

  // Closes the modal if user hits the escape key when modal is open
  checkKeycode(e) {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  }

  close(e) {
    if (this.props.onClose) {
      e.preventDefault();
      this.props.onClose();
    }
  }

  render() {
    if (this.props.element === "fillerElement") {
      return null;
    } else {
      return (
        React.createElement("div", null,
        React.createElement("div", { className: "modal" },
        React.createElement("div", { className: "modal__close-btn", onClick: e => this.close(e) },
        React.createElement("img", { src: "https://image.flaticon.com/icons/svg/148/148766.svg" })),

        React.createElement(ModalHeader, { title: this.props.element, image: this.state.wikiImage }),
        React.createElement(ModalDetail, { symbol: this.props.symbol, mass: this.props.mass, number: this.props.number, state: this.props.state, group: this.props.group }),
        React.createElement(ModalContent, { summary: this.state.wikiSummary, link: this.props.wiki })),

        React.createElement("div", { className: "backdrop", onClick: e => this.close(e) })));


    }
  }}


const ModalHeader = ({
  title,
  image }) =>
{
  return (
    React.createElement("div", { className: "modal-header" },
    React.createElement("img", { className: "modal-header__image", src: image }),
    React.createElement("div", { className: "modal-header__title" }, title)));


};

const ModalDetail = ({
  symbol,
  mass,
  number,
  state,
  group }) =>
{

  const setGroupWiki = group => {
    switch (group) {
      case 'nonmetal':
        return 'https://en.wikipedia.org/wiki/Nonmetal';
        break;
      case 'alkali metal':
        return 'https://en.wikipedia.org/wiki/Alkali_metal';
        break;
      case 'alkaline earth metal':
        return 'https://en.wikipedia.org/wiki/Alkaline_earth_metal';
        break;
      case 'transition metal':
        return 'https://en.wikipedia.org/wiki/Transition_metal';
        break;
      case 'metal':
        return 'https://en.wikipedia.org/wiki/Post-transition_metal';
        break;
      case 'metalloid':
        return 'https://en.wikipedia.org/wiki/Metalloid';
        break;
      case 'halogen':
        return 'https://en.wikipedia.org/wiki/Halogen';
        break;
      case 'noble gas':
        return 'https://en.wikipedia.org/wiki/Noble_gas';
        break;
      case 'lanthanoid':
        return 'https://en.wikipedia.org/wiki/Lanthanide';
        break;
      case 'actinoid':
        return 'https://en.wikipedia.org/wiki/Actinide';
        break;
      default:
        return null;}

  };

  return (
    React.createElement("div", { className: "modal-details" },
    React.createElement("div", { className: "modal-detail modal-details__number" },
    React.createElement("div", { className: "modal-detail__label" }, "Atomic Number:"),
    React.createElement("div", { className: "modal-detail__value" }, number)),

    React.createElement("div", { className: "modal-detail modal-details__symbol" },
    React.createElement("div", { className: "modal-detail__label" }, "Symbol:"),
    React.createElement("div", { className: "modal-detail__value" }, symbol)),

    React.createElement("div", { className: "modal-detail modal-details__mass" },
    React.createElement("div", { className: "modal-detail__label" }, "Atomic Mass:"),
    React.createElement("div", { className: "modal-detail__value" },
    React.createElement("a", { href: "https://en.wikipedia.org/wiki/Unified_atomic_mass_unit", className: "detail-link" }, mass, " u"))),


    React.createElement("div", { className: "modal-detail modal-details__group" },
    React.createElement("div", { className: "modal-detail__label" }, "Group:"),
    React.createElement("div", { className: "modal-detail__value" },
    React.createElement("a", { href: setGroupWiki(group), className: "detail-link" }, group))),


    React.createElement("div", { className: "modal-detail modal-details__state" },
    React.createElement("div", { className: "modal-detail__label" }, "State:"),
    React.createElement("div", { className: "modal-detail__value" }, state))));



};

const ModalContent = ({
  summary,
  link }) =>
{
  return (
    React.createElement("div", { className: "modal-content" },
    React.createElement("p", { className: "modal-content__summary" }, summary),
    React.createElement("a", { className: "modal-content__wiki-link", href: link }, "wikipedia")));


};

const Header = () => {
  return (
    React.createElement("div", { className: "header" },
    React.createElement("div", { className: "title" }, "Periodic Table"),
    React.createElement("div", { className: "subtitle" }, "of the elements")));


};

const Element = ({
  mass,
  number,
  group,
  name,
  state,
  symbol,
  yearDiscovered,
  wiki,
  setModalElement }) =>
{

  let groupStyle = group => {
    if (!group) {
      return '';
    } else {
      return group.split(' ').join('-');
    }
  };

  let stateStyle = state => {
    if (state === '') {
      return 'state-unknown';
    } else {
      return state;
    }
  };

  let styles = classNames('element', groupStyle(group), stateStyle(state));

  return (
    React.createElement("div", { className: styles, onClick: () => setModalElement(name, wiki, symbol, mass, number, state, group) },
    React.createElement("div", { className: "symbol" }, symbol),
    React.createElement("div", { className: "number" }, number)));


};

const Group = ({
  elements,
  setModalElement }) =>
{

  const group = elements.map(({
    mass,
    number,
    group,
    name,
    state,
    symbol,
    yearDiscovered,
    wiki }) =>
  {

    return React.createElement(Element, { key: number, mass: mass, number: number, group: group, name: name, state: state, symbol: symbol, yearDiscovered: yearDiscovered, wiki: wiki, setModalElement: setModalElement });

  });

  return (
    React.createElement("div", { className: "group" }, group));

};

const Footer = () => {
  return (
    React.createElement("div", { className: "by-dylan" }, "by ", React.createElement("a", { className: "my-site", href: "http://www.dylanbyars.com" }, "Dylan")));

};

class PeriodicTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // holds the element info when the ajax request launched when the component mounts returns data
      // null to start
      elements: null,
      // this is where the elements broken into groups will be stored
      group1: null,
      group2: null,
      group3: null,
      group4: null,
      group5: null,
      group6: null,
      group7: null,
      group8: null,
      group9: null,
      group10: null,
      group11: null,
      group12: null,
      group13: null,
      group14: null,
      group15: null,
      group16: null,
      group17: null,
      group18: null,
      lanthanoids: null,
      actinoids: null,
      // the active element, if one's selected by the user. Null to start.
      activeElement: null,
      activeElementWiki: null,
      activeElementSymbol: null,
      activeElementMass: null,
      activeElementNumber: null,
      activeElementState: null,
      activeElementGroup: null,
      // boolean to determine if the modal is/should be open or not. False to start
      modalOpen: false };


    this.setModalElement = this.setModalElement.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // launches an ajax request to the element data and stores that info in the PeriodicTable componenent's state
  componentDidMount() {
    const dataUrl = 'https://rawgit.com/dbyars/periodic-table-1/master/data.json';
    axios.get(dataUrl).then(response => {
      let returnedData = response.data.map(({
        atomicMass,
        atomicNumber,
        groupBlock,
        name,
        standardState,
        symbol,
        yearDiscovered,
        wiki }) =>
      {
        return {
          mass: atomicMass,
          number: atomicNumber,
          group: groupBlock,
          name: name,
          state: standardState,
          symbol: symbol,
          yearDiscovered: yearDiscovered,
          wiki: wiki };

      });

      this.setState({
        elements: returnedData });


      // now that all of the element data is stored in state, create the groups
      const groups = [
      [1, 3, 11, 19, 37, 55, 87],
      [4, 12, 20, 38, 56, 88],
      [21, 39],
      [22, 40, 72, 104],
      [23, 41, 73, 105],
      [24, 42, 74, 106],
      [25, 43, 75, 107],
      [26, 44, 76, 108],
      [27, 45, 77, 109],
      [28, 46, 78, 110],
      [29, 47, 79, 111],
      [30, 48, 80, 112],
      [5, 13, 31, 49, 81, 113],
      [6, 14, 32, 50, 82, 114],
      [7, 15, 33, 51, 83, 115],
      [8, 16, 34, 52, 84, 116],
      [9, 17, 35, 53, 85, 117],
      [2, 10, 18, 36, 54, 86, 118]];


      const fBlock = [
      [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71],
      [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103]];


      const getGroupElements = groupElements => {
        return this.state.elements.filter(element => {
          return groupElements.includes(element.number);
        });
      };

      //for the 2 empty spots in group 3
      const fillerElement = () => {
        return {
          mass: null,
          number: null,
          group: null,
          name: null,
          state: null,
          symbol: null,
          yearDiscovered: null,
          wiki: null };

      };

      this.setState({
        group1: getGroupElements(groups[0]),
        group2: getGroupElements(groups[1]),
        group3: [...getGroupElements(groups[2]), fillerElement, fillerElement],
        group4: getGroupElements(groups[3]),
        group5: getGroupElements(groups[4]),
        group6: getGroupElements(groups[5]),
        group7: getGroupElements(groups[6]),
        group8: getGroupElements(groups[7]),
        group9: getGroupElements(groups[8]),
        group10: getGroupElements(groups[9]),
        group11: getGroupElements(groups[10]),
        group12: getGroupElements(groups[11]),
        group13: getGroupElements(groups[12]),
        group14: getGroupElements(groups[13]),
        group15: getGroupElements(groups[14]),
        group16: getGroupElements(groups[15]),
        group17: getGroupElements(groups[16]),
        group18: getGroupElements(groups[17]),
        lanthanoids: getGroupElements(fBlock[0]),
        actinoids: getGroupElements(fBlock[1]) });


    });
  }

  setModalElement(element, wiki, symbol, mass, number, state, group) {
    this.setState({
      activeElement: element,
      activeElementWiki: wiki,
      activeElementSymbol: symbol,
      activeElementMass: mass,
      activeElementNumber: number,
      activeElementState: state,
      activeElementGroup: group,
      modalOpen: true });

  }

  closeModal() {
    this.setState({
      modalOpen: false });

  }

  render() {

    if (!this.state.group1) {
      return (
        React.createElement("div", { className: "spinner-container" },
        React.createElement(Spinner, { spinnerName: "wandering-cubes" })));


    } else {
      return (
        React.createElement("div", { className: "periodic-table" },

        this.state.modalOpen && React.createElement(Modal, { onClose: this.closeModal, element: this.state.activeElement, wiki: this.state.activeElementWiki, symbol: this.state.activeElementSymbol, mass: this.state.activeElementMass, number: this.state.activeElementNumber, state: this.state.activeElementState, group: this.state.activeElementGroup }),

        React.createElement(Header, null),
        React.createElement("div", { className: "main-block" },
        React.createElement(Group, { elements: this.state.group1, setModalElement: this.setModalElement }),
        React.createElement(Group, { elements: this.state.group2, setModalElement: this.setModalElement }),
        React.createElement(Group, { elements: this.state.group3, setModalElement: this.setModalElement }),
        React.createElement(Group, { elements: this.state.group4, setModalElement: this.setModalElement }),
        React.createElement(Group, { elements: this.state.group5, setModalElement: this.setModalElement }),
        React.createElement(Group, { elements: this.state.group6, setModalElement: this.setModalElement }),
        React.createElement(Group, { elements: this.state.group7, setModalElement: this.setModalElement }),
        React.createElement(Group, { elements: this.state.group8, setModalElement: this.setModalElement }),
        React.createElement(Group, { elements: this.state.group9, setModalElement: this.setModalElement }),
        React.createElement(Group, { elements: this.state.group10, setModalElement: this.setModalElement }),
        React.createElement(Group, { elements: this.state.group11, setModalElement: this.setModalElement }),
        React.createElement(Group, { elements: this.state.group12, setModalElement: this.setModalElement }),
        React.createElement(Group, { elements: this.state.group13, setModalElement: this.setModalElement }),
        React.createElement(Group, { elements: this.state.group14, setModalElement: this.setModalElement }),
        React.createElement(Group, { elements: this.state.group15, setModalElement: this.setModalElement }),
        React.createElement(Group, { elements: this.state.group16, setModalElement: this.setModalElement }),
        React.createElement(Group, { elements: this.state.group17, setModalElement: this.setModalElement }),
        React.createElement(Group, { elements: this.state.group18, setModalElement: this.setModalElement })),

        React.createElement("div", { className: "f-block" },
        React.createElement(Group, { elements: this.state.lanthanoids, setModalElement: this.setModalElement }),
        React.createElement(Group, { elements: this.state.actinoids, setModalElement: this.setModalElement })),

        React.createElement(Footer, null)));


    }

  }}


ReactDOM.render(React.createElement(PeriodicTable, null), document.querySelector('.ptable'));