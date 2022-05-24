const roles = [
    { id: 1, name: "Frontend Developer" },
    { id: 2, name: "Backend developer" },
    { id: 3, name: "QA Analyst" },
    { id: 4, name: "Designer" },
    { id: 5, name: 'Product Owner'}
  ];
  
  const employees = [
    { id: 1, name: "Juan", roleId: 1, salary: 1000 },
    { id: 2, name: "Pedro", roleId: 1, salary: 2000 },
    { id: 3, name: "Mateo", roleId: 2, salary: 3500 },
    { id: 4, name: "Carlos", roleId: 2, salary: 4000 },
    { id: 5, name: "Diego", roleId: 2, salary: 2500 },
    { id: 6, name: "Florencia", roleId: 3, salary: 3000 },
    { id: 7, name: "Micaela", roleId: 4, salary: 5000 }
  ];
  
  /* 
  1. Make a function that groups each employee by its role
   e.g.
   { 
     "Frontend Developer": [{ id: 1, name: "Juan", roleId: 1, salary: 1000 }, { id: 2, name: "Pedro", roleId: 1, salary: 2000 }, ...],
     "Backend developer": [{ id: 3, name: "Mateo", roleId: 2, salary: 3500 },{ id: 4, name: "Carlos", roleId: 2, salary: 4000 }, ...] 
     ...
   } 
  */
  
//   function getEmployeesByRole() {
//     let rolesEmployee = {}
//     roles.forEach( role => 
//         rolesEmployee[role.name] = employees.filter( employee => employee.roleId === role.id)
//     )

//     console.log(rolesEmployee)
//   }
//   getEmployeesByRole()
  
  
  /* 
  
  2. Make a function that returns true if all roles are being filled by at least one employee.
    e.g.
    {
      "Frontend Developer": true,
      "Backend Developer": true,
      "Product Owner": false,
      ...
    }
  */
  
//   function getFilledRoles(){
//     let rolesEmployee = {}
//     roles.forEach( role => 
//         rolesEmployee[role.name] = employees.some( employee => employee.roleId === role.id)
//     )    
//     return rolesEmployee
//   }
//   console.log(
//     getFilledRoles()
//   )
  
  /* 
  
  3. Make a function that returns the sum of all salaries for each role.
    e.g.
    {
      "Frontend Developer": 1000,
      "Backend Developer": 10000,    
      "Designer": 5000,
      "QA Analyst": 3000, 
      "Product Owner": 0,
      ...
    }
  */
  
  function getTotalSalariesByRole(){
    let rolesEmployee = {}
    roles.forEach( role => 
        rolesEmployee[role.name] = employees
            .reduce( (sum, employee) => role.id === employee.roleId 
                    ? sum + employee.salary
                    : sum                        
              ,0)
    )    
    return rolesEmployee    
  }
  console.log(
      getTotalSalariesByRole()
  )
  
  