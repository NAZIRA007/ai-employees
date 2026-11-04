
/**
 * NOVA AI Marketing Agency
 * Daily Report Generator
 */

function generateDailyReport(entries, reportDate = new Date()) {
  const date = reportDate.toISOString().slice(0, 10);

  const completed = entries.filter(
    entry => entry.outputStatus === 'Completed'
  );

  const pending = entries.filter(
    entry => entry.outputStatus === 'Pending Review'
  );

  const blocked = entries.filter(
    entry => entry.outputStatus === 'Blocked'
  );

  const failed = entries.filter(
    entry => entry.outputStatus === 'Failed'
  );

  const formatTasks = tasks =>
    tasks.length
      ? tasks.map(task =>
          `- ${task.agentName}: ${task.taskPerformed}`
        ).join('\n')
      : '- None';

  return `
NOVA AI MARKETING AGENCY
DAILY TEAM REPORT

Report date: ${date}
Prepared by: Chief of Staff

TOTAL TASKS: ${entries.length}

COMPLETED (${completed.length})
${formatTasks(completed)}

PENDING REVIEW (${pending.length})
${formatTasks(pending)}

BLOCKED (${blocked.length})
${formatTasks(blocked)}

FAILED (${failed.length})
${formatTasks(failed)}

NEXT STEPS:
- Review pending tasks.
- Resolve blocked tasks.
- Investigate failed tasks.
- Plan the next working day.

NOVA AI Marketing Agency
  `.trim();
}

// Example demonstration using test data.
function runReportDemo() {
  const demoEntries = [
    {
      agentName: 'GTM Engineer',
      taskPerformed: 'Prepared marketing strategy',
      outputStatus: 'Completed'
    },
    {
      agentName: 'SEO/AEO Employee',
      taskPerformed: 'Researched keywords',
      outputStatus: 'Pending Review'
    },
    {
      agentName: 'Social Media Employee',
      taskPerformed: 'Prepared content calendar',
      outputStatus: 'Completed'
    }
  ];

  return generateDailyReport(demoEntries);
}
