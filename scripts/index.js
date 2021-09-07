import jobsObject from './jobs.js';

const jobsContainer = document.querySelector('#jobs-container-el');
const jobDescriptionEl = document.querySelector('#job-description-el');

const keywordInp = document.querySelector('#keyword-inp');
const locationInp = document.querySelector('#location-inp');
const searchBtn = document.querySelector('#search-btn');

let jobItems = '';
let jobDetails = '';
const allJobs = jobsObject.map((job) => {
  return job;
});

fnRender(allJobs);

//EVENT LISTENERS
searchBtn.addEventListener('click', () => {
  fnSearch(allJobs);
});

document.addEventListener('click', function (e) {
  fnShowJobDesc(e, allJobs);
});

//FUNCTIONS

function fnShowJobDesc(e, list) {
  const len = allJobs.length;
  let job = '';
  console.log(len);
  for (let i = 0; i < len; i++) {
    if (e.target && e.target.id == `title-el-${i}`) {
      job = allJobs.find((job) => job.jobId === i);
      console.log(job);
    }
  }
  job ? fnRenderJobDetails(job) : '';
}

function fnRenderJobDetails(list) {
  jobDetails = '';

  jobDetails = `${jobDetails}
                    <div class="jobs-body">
                    <h1  class="desc-job-title-el"" >${list.jobTitle}</h1>
                    <p id="desc-company-el">${list.companyName}</p>
                    <p id="desc-province-el">${list.Province} * ${list.jobType}</p>
                    <h2 id="desc-pay-el">$${list.jobPay} an hour</h2>
                    <p id="desc-job-shot-description-el">${list.jobDescription}</p> 
    </div>`;

  jobDescriptionEl.className = 'job-details-container';
  jobDescriptionEl.innerHTML = jobDetails;
}
function fnRender(list) {
  list.forEach((job) => {
    jobItems = `${jobItems} 
                      <div class="jobs-header">
                      <h1 id="title-el-${job.jobId}" class="job-title"" >${
      job.jobTitle
    }</h1>
                      <p id="company-el">${job.companyName}</p>
                      <p id="province-el">${job.Province}</p>
                      <h2 id="pay-el">$${job.jobPay} an hour</h2>
                      <p id="job-shot-description-el">${job.jobDescription.substring(
                        0,
                        150
                      )}</p> 
                      </div>`;
  });

  jobsContainer.innerHTML = jobItems;
}

function fnSearch(jobList) {
  let searchList = '';
  const keyword = keywordInp.value ? keywordInp.value : 'all';
  const location = locationInp.value ? locationInp.value : 'all';

  if (keyword === 'all' && location === 'all') {
    searchList = jobList;
  } else if (keyword != 'all' && location === 'all') {
    searchList = jobList.filter(
      (list) => list.jobTitle.toLowerCase() == keyword.toLowerCase()
    );
  } else if (keyword === 'all' && location != 'all') {
    searchList = jobList.filter(
      (list) => list.Province.toLowerCase() == location.toLowerCase()
    );
  } else if (keyword != 'all' && location != 'all') {
    searchList = jobList.filter((list) => {
      list.Province.toLowerCase() == location.toLowerCase();
      list.jobTitle.toLowerCase() == keyword.toLowerCase();
    });
  }
  jobItems = '';
  fnRender(searchList);
}

function fnSearchJobs(keyword, location, jobList) {
  const searchList = jobList.filter(
    (list) => list.Province.toLowerCase() == location.toLowerCase()
  );
  return searchList;
}
