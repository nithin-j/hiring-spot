import jobsObject from './jobs.js';

const jobsHeader = document.querySelector('#jobs-header-el');
const jobDescription = document.querySelector('#job-description-el');
const jobsHeaderEl = document.getElementById('jobs-header-el');

let jobItems = '';
let id = 0;
const jobs = jobsObject.map((job) => {
  return job;
});

console.log(jobs);
jobs.forEach((job) => {
  jobItems = `${jobItems} 
                <div class="jobs-header" id="jobs-header-el-${job.jobId}">
                <div id="${job.jobId}"></div>
                <h1 id="title-el" >${job.jobTitle}</h1>
                <p id="company-el">${job.companyName}</p>
                <p id="province-el">${job.Province} * <span>${
    job.jobType
  }</span></p>
                <h2 id="pay-el">$${job.jobPay} an hour</h2>
                <p id="job-shot-description-el">${job.jobDescription.substring(
                  0,
                  150
                )}</p> 
                </div>`;
});

jobsHeader.innerHTML = jobItems;

jobsHeaderEl.addEventListener('click', function (e) {
  fnShowJobDesc();
});

function fnShowJobDesc() {
  jobDescription.className = 'job-details-container';
  console.log('test');
}
