# TokenCampaign
## Voting requirements

* \#1 A single contributor shall be able to vote only one time in a request, so the system shall track who has voted in each request
* \#2 The voting system must be resilient with a large number of contributors
* \#3 No need to keep track the non-approvers to differentiate against no-voters

## Deployment Solution

* \[System developer] Create a factory contract, which will deploy a new instance of Campaign contract
* A manager...
  * User will click Create Campaign
  * Web3/metamask will be instructed to show user a transaction that invokes the _Campaign Factory_
  * User pays the deployment cost
  * Factory deploys a new copy of `Campaign`
  * Campaign Factory will send (to system handler) a list of all deployed campaigns

## Frontpage

\-- Testing...&#x20;

![](https://user-images.githubusercontent.com/72307376/146683295-19ab5cce-0439-4758-99f2-6795aad62333.png)
