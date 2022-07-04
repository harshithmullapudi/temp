$(document).ready(function () {
  $(
    "#airtable-form"
  ).html(`<div style="margin: auto auto; max-width: 1240px" class="jobs-container">
  <div class="filters">
    <div class="input-container">
      <img
        src="https://uploads-ssl.webflow.com/62c2a30509fd0e36d2d4e18e/62c331307bfaf957abcc185b_hiring_search.png" />
      <div class="input">
        <input placeholder="Search for company, job title, etc" />
      </div>
    </div>



    <div class="select-container">
      <img src="https://uploads-ssl.webflow.com/62c2a30509fd0e36d2d4e18e/62c3346bd393b0dd6de2416e_briefcase.png" />
      <div class="select">
        <select id="remote">
          <option value="On-site">Both</option>
          <option value="On-site">On-site</option>
          <option value="remote">Remote</option>
        </select>
      </div>
    </div>
  </div>

  <div class="table">
    <div class="table-header">
      <div class="table-col-1">
        Company
      </div>
      <div class="table-col-2">
        Job Title
      </div>
      <div class="table-col-1">
        Location
      </div>
      <div class="table-col-1">
        Date Posted
      </div>
      <div class="table-col-1">
        Apply
      </div>
    </div>

    <div class="table-data-desktop">
      <div class="table-col-1 company-name">
        Netflix
      </div>
      <div class="table-col-2">
        Senior Researcher, Games
      </div>
      <div class="table-col-1">
        Los Gatos, CA
      </div>
      <div class="table-col-1">
        July 01
      </div>
      <div class="table-col-1">
        Apply
      </div>
    </div>

    <div class="job-active-desktop">
      <div class="table-data-desktop">
        <div class="table-col-1 company-name">
          Netflix
        </div>
        <div class="table-col-2">
          Senior Researcher, Games
        </div>
        <div class="table-col-1">
          Los Gatos, CA
        </div>
        <div class="table-col-1">
          July 01
        </div>
        <div class="table-col-1">
          Apply
        </div>
      </div>
      <div class="more-details">
        <div class="description">
          <div class="title">
            Job description
          </div>
          <div class="value">
            Netflix is the world’s leading streaming entertainment service for over 200 million members around the
            world. As we continue on our mission to entertain the world, games present an entirely new frontier on
            this
            quest, and an incredibly exciting opportunity for our business.
            To succeed on our mission, we need an unparalleled level of consumer insight to inspire and inform our
            nascent gaming initiative. Read more
          </div>
        </div>

        <div class="skills">
          <div class="title">
            Matched skills
          </div>
          <div class="value">
            <div> SQL</div>
            <div> SQL</div>
            <div> SQL</div>
          </div>
        </div>
      </div>
    </div>
    <div class="table-data-desktop">
      <div class="table-col-1 company-name">
        Netflix
      </div>
      <div class="table-col-2">
        Senior Researcher, Games
      </div>
      <div class="table-col-1">
        Los Gatos, CA
      </div>
      <div class="table-col-1">
        July 01
      </div>
      <div class="table-col-1">
        Apply
      </div>
    </div>


    <div class="table-data-phone">
      <div class="td-header">
        <div class="cp-details">
          <div class="cp-name"> Netflix</div>
          <div class="cp-location"> Los Gatos, CA</div>
        </div>
        <div class="cp-actions">
          <button> Apply</button>
        </div>
      </div>
      <div class="td-extra">
        <div class="cp-role">
          Senior Researcher, Games
        </div>
        <div class="cp-posted">
          July 01
        </div>
      </div>
    </div>

    <div class="job-active-phone">
      <div class="table-data-phone">
        <div class="td-header">
          <div class="cp-details">
            <div class="cp-name"> Netflix</div>
            <div class="cp-location"> Los Gatos, CA</div>
          </div>
          <div class="cp-actions">
            <button> Apply</button>
          </div>
        </div>
        <div class="td-extra">
          <div class="cp-role">
            Senior Researcher, Games
          </div>
          <div class="cp-posted">
            July 01
          </div>
        </div>
        <div class="more-details">
          <div class="description">
            <div class="title">
              Job description
            </div>
            <div class="value">
              Netflix is the world’s leading streaming entertainment service for over 200 million members around the
              world. As we continue on our mission to entertain the world, games present an entirely new frontier on
              this
              quest, and an incredibly exciting opportunity for our business.
              To succeed on our mission, we need an unparalleled level of consumer insight to inspire and inform our
              nascent gaming initiative. Read more
            </div>
          </div>

          <div class="skills">
            <div class="title">
              Matched skills
            </div>
            <div class="value">
              <div> SQL</div>
              <div> SQL</div>
              <div> SQL</div>
            </div>
          </div>
        </div>
      </div>
      <div class="table-data-phone">
        <div class="td-header">
          <div class="cp-details">
            <div class="cp-name"> Netflix</div>
            <div class="cp-location"> Los Gatos, CA</div>
          </div>
          <div class="cp-actions">
            <button> Apply</button>
          </div>
        </div>
        <div class="td-extra">
          <div class="cp-role">
            Senior Researcher, Games
          </div>
          <div class="cp-posted">
            July 01
          </div>
        </div>
      </div>

      <div class="table-data-phone">
        <div class="td-header">
          <div class="cp-details">
            <div class="cp-name"> Netflix</div>
            <div class="cp-location"> Los Gatos, CA</div>
          </div>
          <div class="cp-actions">
            <button> Apply</button>
          </div>
        </div>
        <div class="td-extra">
          <div class="cp-role">
            Senior Researcher, Games
          </div>
          <div class="cp-posted">
            July 01
          </div>
        </div>
      </div>
    </div>



    <div class="footer">
      <div class="pagination">
        <a href="#">&lt;</a>
        <a href="#">1</a>
        <a class="active" href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">...</a>
        <a href="#">40</a>
        <a href="#">&gt;</a>
      </div>
    </div>
  </div>
</div>`);
});
