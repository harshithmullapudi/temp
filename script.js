$(document).ready(function () {
  $("#airtable-form").html(`
    <div style="margin: auto auto; max-width: 1240px" class="jobs-container"> <div class="filters"> <div class="input-container"> <img src="https://uploads-ssl.webflow.com/62c2a30509fd0e36d2d4e18e/62c331307bfaf957abcc185b_hiring_search.png" /> <div class="input"> <input id="search" placeholder="Search for company, job title, etc" /> </div> </div>
    <div class="select-container"> <img src="https://uploads-ssl.webflow.com/62c2a30509fd0e36d2d4e18e/62c3346bd393b0dd6de2416e_briefcase.png" /> <div class="select"> <select id="remote"> <option value="On-site">Both</option> <option value="On-site">On-site</option> <option value="remote">Remote</option> </select> </div> </div> </div>
    <div class="table"> <div class="table-header"> <div class="table-col-1"> Company </div> <div class="table-col-2"> Job Title </div> <div class="table-col-1"> Location </div> <div class="table-col-1"> Date Posted </div> <div class="table-col-1"> Apply </div> </div> <div id="content"></div>
    <div class="footer" id="footer"> </div> </div> </div>
    <div class="filters_phone" style="display: none;width: 100vw; height: 100vh; overflow: hidden; position: fixed; top: 0; background: white;"> <div class="filters_heading" style="padding: 15px 10px;display: flex;align-items: center"> <button id="close_filters" style="cursor: pointer;background: transparent;border: none"><img src="https://uploads-ssl.webflow.com/62c2a30509fd0e36d2d4e18e/62c3699d0645c35ca8e24daf_x.png" /></button> <div style="flex-grow: 1; text-align: center"> Filters </div> </div> <div class="input-container"> <img src="https://uploads-ssl.webflow.com/62c2a30509fd0e36d2d4e18e/62c331307bfaf957abcc185b_hiring_search.png" /> <div class="input"> <input id="search" placeholder="Search for company, job title, etc" /> </div> </div> <div class="select-container"> <img src="https://uploads-ssl.webflow.com/62c2a30509fd0e36d2d4e18e/62c3346bd393b0dd6de2416e_briefcase.png" /> <div class="select"> <select id="remote"> <option value="On-site">Both</option> <option value="On-site">On-site</option> <option value="remote">Remote</option> </select> </div> </div> <div class="apply_actions" style="display: fixed; bottom: 0; right: 0; width: 100%;"> <div style="padding: 10px;"> <button id="apply_filters" style="width: 100%;border: none;margin-top: 20px; padding: 10px 20px; text-align: center;cursor: pointer;background: #3996D2; border-radius: 0; color: white"> Apply Filters </button> </div> </div> </div>
  `);

  $("#search").blur(function (event) {
    loadDataFromAirtable(event.currentTarget.value);
  });

  $("#search").keypress(function (event) {
    if (event.keyCode === 13) {
      loadDataFromAirtable(event.currentTarget.value);
    }
  });

  $("#open_filters").click(function (event) {
    $(".filters_phone").css("display", "block");
  });

  $("#close_filters").click(function (event) {
    $(".filters_phone").css("display", "none");
  });

  $("#apply_filters").click(function (event) {
    $(".filters_phone").css("display", "none");
  });

  function loadDataFromAirtable(searchText, offset) {
    const searchEncoded = searchText
      ? `&filterByFormula=SEARCH(${encodeURI(
          '"' + searchText + '"' + ", Job Title"
        )})`
      : "";
    const offsetString = offset ? `&offset=${offset}` : "";
    var settings = {
      url:
        "https://api.airtable.com/v0/app7Ej7oFTmIaMisS/All%20Data?view=Grid%20view&pageSize=20" +
        searchEncoded +
        offsetString,
      method: "GET",
      timeout: 0,
      headers: {
        Authorization: "Bearer keyei2X5jN9o7HmXE",
        Cookie: "brw=brw1wffmmbTzbZyYP",
      },
    };

    $.ajax(settings).done(function (response) {
      const records = response.records;
      let content = "";
      records.forEach(function (record) {
        const fields = record.fields;
        if (window.active_id == record.id) {
          content =
            content +
            `
            <div class="job-active-phone">
              <div class="table-data-phone">
                <div class="td-header">
                  <div class="cp-details">
                    <div class="cp-name"> <a style="text-decoration: none;color: #3996D2;font-weight: 500;font-size: 14px;line-height: 20px;" href="${fields["Job Url"]}" target="_blank" >${fields["Company Name"]}</a></div>
                    <div class="cp-location"> ${fields["Job Location"]}</div>
                  </div>
                  <div class="cp-actions">
                    <a style="text-decoration: none;color: #3996D2;font-weight: 500;font-size: 14px;line-height: 20px;" href="${fields["Apply Url"]}" target="_blank" >Apply</a>
                  </div>
                </div>
                <div class="td-extra">
                  <div class="cp-role">
                    ${fields["Job Title"]}
                  </div>
                  <div class="cp-posted">
                    ${fields["Job Post Date"]}
                  </div>
                </div>
                <div class="more-details">
                  <div class="description">
                    <div class="title" style="font-size: 14px;max-width: 190px;">
                      Job description
                    </div>
                    <div class="value">
                     ${fields["Job Description"]}
                    </div>
                  </div>

                  <div class="skills">
                    <div class="title">
                      Matched skills
                    </div>
                    <div class="value">
                      ${fields["Matched Skills"]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="job-active-desktop" style="border-bottom: 1px solid #C9D8E1">
              <div class="table-data-desktop">
                <div class="table-col-1 company-name">
                  <a style="text-decoration: none;color: #3996D2;font-weight: 500;font-size: 14px;line-height: 20px;" href="${fields["Job Url"]}" target="_blank" >${fields["Company Name"]}</a>
                </div>
                <div class="table-col-2" style="text-align: left;font-size: 14px;line-height: 20px;">
                  ${fields["Job Title"]}
                </div>
                <div class="table-col-1">
                  ${fields["Job Location"]}
                </div>
                <div class="table-col-1">
                  ${fields["Job Post Date"]}
                </div>
                <div class="table-col-1">
                  <a style="text-decoration: none;color: #3996D2;font-weight: 500;font-size: 14px;line-height: 20px;" href="${fields["Apply Url"]}" target="_blank" >Apply</a>
                </div>
              </div>
              <div class="more-details">
                <div class="description">
                  <div class="title">
                    Job description
                  </div>
                  <div class="value">
                    ${fields["Job Description"]}
                  </div>
                </div>

                <div class="skills">
                  <div class="title">
                    Matched skills
                  </div>
                  <div class="value">
                    ${fields["Matched Skills"]}
                  </div>
                </div>
              </div>
            </div>
          `;
        } else {
          content =
            content +
            `
            <div class="table-data-desktop" style="font-size: 14px;" id="${record.id}" data-id="${record.id}">
              <div class="table-col-1 company-name" id="${record.id}">
                <a style="text-decoration: none;color: #3996D2;font-weight: 500;font-size: 14px;line-height: 20px;" href="${fields["Job Url"]}" target="_blank" >${fields["Company Name"]}</a>
              </div>
              <div class="table-col-2" style="font-size: 14px;line-height: 20px;" >
                ${fields["Job Title"]}
              </div>
              <div class="table-col-1">
                ${fields["Job Location"]}
              </div>
              <div class="table-col-1">
                ${fields["Job Post Date"]}
              </div>
              <div class="table-col-1">
                <a style="text-decoration: none;color: #3996D2;font-weight: 500;font-size: 14px;line-height: 20px;" href="${fields["Apply Url"]}" target="_blank" >Apply</a>
              </div>
            </div>
            <div class="table-data-phone" id="${response.id}" data-id="${record.id}">
              <div class="td-header">
                <div class="cp-details">
                  <div class="cp-name"> ${fields["Company Name"]}</div>
                  <div class="cp-location"> ${fields["Job Location"]}</div>
                </div>
                <div class="cp-actions">
                  <a style="text-decoration: none;color: #3996D2;font-weight: 500;font-size: 14px;line-height: 20px;" href="${fields["Apply Url"]}" target="_blank" >Apply</a>
                </div>
              </div>
              <div class="td-extra">
                <div class="cp-role" style="font-size: 14px;max-width: 190px;" >
                  ${fields["Job Title"]}
                </div>
                <div class="cp-posted">
                  ${fields["Job Post Date"]}
                </div>
              </div>
            </div>
          `;
        }
      });

      $("#content").html(content);

      $("div.table-data-desktop").click((event) => {
        const id = event.target.id || event.target.parentElement.id;
        window.active_id = id;
        loadDataFromAirtable();
      });

      window.response_offset = response.offset;

      if (response.offset) {
        $("#footer").html(`
          <div class="pagination">
            <button style="cursor: pointer;border: none;color: white;padding: 10px 15px;background: #3996D2;border-radius: 20px;" class="active" id="next_page" >Next</button>
          </div>
        `);
        $("#next_page").click(function () {
          loadDataFromAirtable(undefined, window.response_offset);
        });
      }
    });
  }
  loadDataFromAirtable();
});
