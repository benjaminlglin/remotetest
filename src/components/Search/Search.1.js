import React from "react";
import PropTypes from "prop-types";
import { InstantSearch, SearchBox, Hits, Stats, Pagination } from "react-instantsearch/dom";

import Hit from "./Hit";
const test = `<gcse:search></gcse:search>`
const Search = props => {
  const { algolia, theme } = props;

  return (
    <React.Fragment>
      <div className="ais-SearchBox">
      <form  id="cse-search-box" action="http://google.com/cse">
<input type="hidden" name="cx" value="012828946960471351788:utif4wtuoos" />
<input type="hidden" name="ie" value="UTF-8" />
<input class="ais-SearchBox-input" type="text" name="q" size="31" />
<input type="text" placeholder="Search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" required="" maxlength="512" class="ais-SearchBox-input" value=""></input>
<input type="submit" name="sa" value="Search" />
</form>
<img src="http://www.google.com/cse/images/google_custom_search_smwide.gif"/>
      </div>
       <script>{`
  (function() {
    var cx = '012828946960471351788:utif4wtuoos';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
  `}</script>
      <div className="search">
     


        {algolia &&
          algolia.appId && (
            <InstantSearch
              appId={algolia.appId}
              apiKey={algolia.searchOnlyApiKey}
              indexName={algolia.indexName}
            >
              <SearchBox translations={{ placeholder: "Search" }} />
              <Stats />
              <Hits hitComponent={Hit} />
              <Pagination />
            </InstantSearch>
          )}
          
      </div>

      {/* --- STYLES --- */}
      <style jsx global>{`
        .ais-SearchBox {
          width: 100%;
        }
        .ais-SearchBox-form {
          position: relative;
          border-bottom: 1px solid #aaa;
          display: flex;
          justify-content: space-between;
        }
        .ais-SearchBox-input {
          border: none;
          padding: 0.2em;
          font-size: 1.4em;
          flex-grow: 1;
        }
        .ais-SearchBox-submit,
        .ais-SearchBox-reset {
          background: none;
          border: none;
          fill: #666;
          flex-grow: 0;
        }
        .ais-Stats {
          margin: 0.5em 0 2em 0.3em;
          font-size: 0.9em;
          color: #999;
          display: block;
        }
        .ais-Hits-list {
          list-style: none;
          padding: 0;
        }
        .ais-Pagination-list {
          display: flex;
          list-style: none;
          justify-content: center;
          padding: 0;
        }
        .ais-Pagination-item a,
        .ais-Pagination-item span {
          color: #666;
          font-size: 1.2em;
          display: block;
          padding: 0.5em 0.5em 2em;
        }
        .ais-Pagination-item a:hover {
          color: red;
        }
        .ais-Pagination-item.ais-Pagination-item--firstPage a,
        .ais-Pagination-item.ais-Pagination-item--previousPage a,
        .ais-Pagination-item.ais-Pagination-item--nextPage a {
          padding: 0.4em 0.5em 0.6em;
        }
      `}</style>
    </React.Fragment>
    
  );
};

Search.propTypes = {
  algolia: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Search;
