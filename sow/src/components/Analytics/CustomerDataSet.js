export const CustomerDataSet = [
    // Active     more than 30 days
    [
        {
            name:"TCS",
            startDate:`${new Date("11/01/2021").toDateString()}`,
            endDate:`${new Date("12/27/2021").toDateString()}`,
            daysLeft:`${((new Date("12/27/2021") - new Date())/(1000 * 60 * 60 * 24)).toFixed(0)}`
         },
         {
            name:"ACCENTURE",
            startDate:`${new Date("02/01/2021").toDateString()}`,
            endDate:`${new Date("01/14/2022").toDateString()}`,
            daysLeft:`${((new Date("01/14/2022") - new Date())/(1000 * 60 * 60 * 24)).toFixed(0)}`
         },
        {
            name:"CANDENT",
            startDate:`${new Date("12/01/2021").toDateString()}`,
            endDate:`${new Date("12/25/2021").toDateString()}`,
            daysLeft:`${((new Date("12/25/2021") - new Date())/(1000 * 60 * 60 * 24)).toFixed(0)}`
         },
         {
            name:"GOOGLE",
            startDate:`${new Date("02/01/2021").toDateString()}`,
            endDate:`${new Date("12/15/2021").toDateString()}`,
            daysLeft:`${((new Date("12/15/2021") - new Date())/(1000 * 60 * 60 * 24)).toFixed(0)}`
         },
         
       {
          name:"AMAZON",
          startDate:`${new Date("02/01/2021").toDateString()}`,
          endDate:`${new Date("12/27/2021").toDateString()}`,
          daysLeft:`${((new Date("12/27/2021") - new Date())/(1000 * 60 * 60 * 24)).toFixed(0)}`
       },
       {
        name:"BHEL",
        startDate:`${new Date("02/01/2021").toDateString()}`,
        endDate:`${new Date("01/11/2022").toDateString()}`,
        daysLeft:`${((new Date("01/11/2022") - new Date())/(1000 * 60 * 60 * 24)).toFixed(0)}`
     },
       {
        name:"WIPRO",
        startDate:`${new Date("02/01/2021").toDateString()}`,
        endDate:`${new Date("12/14/2021").toDateString()}`,
        daysLeft:`${((new Date("12/14/2021") - new Date())/(1000 * 60 * 60 * 24)).toFixed(0)}`
     },
      ],
    //   Expiring soon!            More than 15, less than a month
    [
        {
            name:"META",
            startDate:`${new Date("02/01/2021").toDateString()}`,
            endDate:`${new Date("12/11/2021").toDateString()}`,
            daysLeft:`${((new Date("12/11/2021") - new Date())/(1000 * 60 * 60 * 24)).toFixed(0)}`
         },
         {
            name:"TATA",
            startDate:`${new Date("02/01/2021").toDateString()}`,
            endDate:`${new Date("11/31/2021").toDateString()}`,
            daysLeft:`${((new Date("11/31/2021") - new Date())/(1000 * 60 * 60 * 24)).toFixed(0)}`
         },
         {
            name:"FACEBOOK",
            startDate:`${new Date("11/01/2021").toDateString()}`,
            endDate: `${new Date("11/31/2021").toDateString()}`,
            daysLeft: `${((new Date("11/31/2021") - new Date())/(1000 * 60 * 60 * 24)).toFixed(0)}`
         },
         {
            name:"NETFLIX",
            startDate:`${new Date("02/01/2021").toDateString()}`,
            endDate:`${new Date("12/09/2021").toDateString()}`,
            daysLeft:`${((new Date("12/09/2021") - new Date())/(1000 * 60 * 60 * 24)).toFixed(0)}`
         },
       {
          name:"INFOSYS",
          startDate:`${new Date("02/01/2021").toDateString()}`,
          endDate:`${new Date("11/27/2021").toDateString()}`,
          daysLeft:`${((new Date("11/27/2021") - new Date())/(1000 * 60 * 60 * 24)).toFixed(0)}`
       },
      ],
    //   Expiring Now    Less than 15 days 
    [
         {
            name:"REACT",
            startDate:`${new Date("01/02/2021").toDateString()}`,
            endDate:`${new Date("11/24/2021").toDateString()}`,
            daysLeft:`${((new Date("11/24/2021") - new Date())/(1000 * 60 * 60 * 24)).toFixed(0)}`
         },
         {
            name:"AFRO",
            startDate:`${new Date("02/02/2021").toDateString()}`,
            endDate:`${new Date("11/18/2021").toDateString()}`,
            daysLeft:`${((new Date("11/18/2021") - new Date())/(1000 * 60 * 60 * 24)).toFixed(0)}`
         },
       {
          name:"THUSE",
          startDate:`${new Date("02/02/2021").toDateString()}`,
          endDate:`${new Date("11/12/2021").toDateString()}`,
          daysLeft:`${((new Date("11/12/2021") - new Date())/(1000 * 60 * 60 * 24)).toFixed(0)}`
       }
    ],
   ]
