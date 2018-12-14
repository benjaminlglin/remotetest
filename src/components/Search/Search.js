import React from "react";
import PropTypes from "prop-types";
import lifecycle from 'react-pure-lifecycle';
//import { InstantSearch, SearchBox, Hits, Stats, Pagination } from "react-instantsearch/dom";

//import Hit from "./Hit";
var test = `
(function() {
  var cx = '012828946960471351788:utif4wtuoos';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
})();

`;

var test2=`<gcse:search></gcse:search>`;
const methods = {
  componentDidMount(props) {
    console.log('I mounted! Here are my props: ', props);
    new Function(test)();
  }
};
const Search = props => {
  const { algolia, theme } = props;
  
  return (
    <React.Fragment>
   
    <div  dangerouslySetInnerHTML={{ __html: test2 }} />
    </React.Fragment>
        
        );
};

Search.propTypes = {
  algolia: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default lifecycle(methods)(Search);
