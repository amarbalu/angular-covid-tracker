export interface status{
"cases": number,
"deaths": number,
"recovered": number,
"active_cases": activeCases[],
"closed_cases": closedCases[],
"table": any[]
}
interface activeCases{
  "criticalStates": number,
"currently_infected_patients": number,
"inMidCondition":number
}
interface closedCases{
  "cases_which_had_an_outcome": number,
"deaths": number,
"recovered":number,

}