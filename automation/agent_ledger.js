
/**
 * NOVA AI Marketing Agency
 * Employee Activity Ledger
 */

const EMPLOYEES = [
  'GTM Engineer',
  'SEO/AEO Employee',
  'Web Dev Employee',
  'Social Media Employee',
  'Ad Manager Employee',
  'Sales Employee',
  'Customer Satisfaction Employee',
  'Chief of Staff'
];

const STATUSES = [
  'Completed',
  'Pending Review',
  'Blocked',
  'Failed'
];

function createLedgerEntry(agentName, task, status) {
  if (!EMPLOYEES.includes(agentName)) {
    throw new Error('Unknown employee: ' + agentName);
  }

  if (!STATUSES.includes(status)) {
    throw new Error('Invalid status: ' + status);
  }

  return {
    timestamp: new Date().toISOString(),
    agentName: agentName,
    taskPerformed: task,
    outputStatus: status
  };
}

function createDemoLedger() {
  return [
    createLedgerEntry(
      'GTM Engineer',
      'Prepared marketing strategy',
      'Pending Review'
    ),
    createLedgerEntry(
      'SEO/AEO Employee',
      'Prepared keyword research',
      'Pending Review'
    ),
    createLedgerEntry(
      'Social Media Employee',
      'Drafted social media content',
      'Pending Review'
    )
  ];
}
