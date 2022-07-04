$(document).ready(function () {
      $("#airtable-form").html(`
        <div style="margin: auto auto; max-width: 1240px" class="jobs-container"> <div class="filters"> <div class="input-container"> <img src="https://uploads-ssl.webflow.com/62c2a30509fd0e36d2d4e18e/62c331307bfaf957abcc185b_hiring_search.png" /> <div class="input"> <input placeholder="Search for company, job title, etc" /> </div> </div>
        <div class="select-container"> <img src="https://uploads-ssl.webflow.com/62c2a30509fd0e36d2d4e18e/62c3346bd393b0dd6de2416e_briefcase.png" /> <div class="select"> <select id="remote"> <option value="On-site">Both</option> <option value="On-site">On-site</option> <option value="remote">Remote</option> </select> </div> </div> </div>
        <div class="table"> <div class="table-header"> <div class="table-col-1"> Company </div> <div class="table-col-2"> Job Title </div> <div class="table-col-1"> Location </div> <div class="table-col-1"> Date Posted </div> <div class="table-col-1"> Apply </div> </div> <div id="content"></div>
        <div class="footer" id="footer"> </div> </div> </div>
      `);
      function loadDataFromAirtable() {
        var settings = {
          url: "https://api.airtable.com/v0/app7Ej7oFTmIaMisS/All%20Data?view=Grid%20view&pageSize=20",
          method: "GET",
          timeout: 0,
          headers: {
            Authorization: "Bearer keyei2X5jN9o7HmXE",
            Cookie: "brw=brw1wffmmbTzbZyYP",
          },
        };

        $.ajax(settings).done(function (response) {
          const records = response.records;
          let content = ""
          records.forEach(function (record) {
            const fields = record.fields;
            content = content + `
              <div class="table-data-desktop" style="font-size: 14px;">
                <div class="table-col-1 company-name">
                  <a style="text-decoration: none;color: #3996D2;font-weight: 500;font-size: 14px;line-height: 20px;" href="${fields['Job Url']}" target="_blank" >${fields['Company Name']}</a>
                </div>
                <div class="table-col-2" style="font-size: 14px;line-height: 20px;" >
                  ${fields['Job Title']}
                </div>
                <div class="table-col-1">
                  ${fields['Job Location']}
                </div>
                <div class="table-col-1">
                  ${fields['Job Post Date']}
                </div>
                <div class="table-col-1">
                  <a style="text-decoration: none;color: #3996D2;font-weight: 500;font-size: 14px;line-height: 20px;" href="${fields['Apply Url']}" target="_blank" >Apply</a>
                </div>
              </div>
              <div class="table-data-phone">
                <div class="td-header">
                  <div class="cp-details">
                    <div class="cp-name"> ${fields['Company Name']}</div>
                    <div class="cp-location"> ${fields['Job Location']}</div>
                  </div>
                  <div class="cp-actions">
                    <a style="text-decoration: none;color: #3996D2;font-weight: 500;font-size: 14px;line-height: 20px;" href="${fields['Apply Url']}" target="_blank" >Apply</a>
                  </div>
                </div>
                <div class="td-extra">
                  <div class="cp-role" style="font-size: 14px;max-width: 190px;" >
                    ${fields['Job Title']}
                  </div>
                  <div class="cp-posted">
                    ${fields['Job Post Date']}
                  </div>
                </div>
              </div>
            `
          });

          $('#content').html(content)
          if (response.offset) {
            $('#footer').html(`
              <div class="pagination">
                <a class="active">Next</a>
              </div>
            `)
          }
        });
      }

      loadDataFromAirtable()
    });
