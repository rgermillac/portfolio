import portfolioData from './portfolios.json';

export const getEntries = () => portfolioData;

export const addEntry = null;

export const getEntriesId = (id:any) => {
   const projects = portfolioData.projects;
   console.log(projects.find((p:any) => p.id == id))
    return(projects.find((p:any) => p.id == id))
   //console.log(projects)
}

export const saveProject = (project:any)=>{
   portfolioData.projects.push(project);
   return portfolioData.projects
   //const projects = portfolioData.projects
}