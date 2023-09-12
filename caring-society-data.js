var domains_data = {
    "Caring Society": {
       description: "We have a caring society that supports people throughout their lives",
       indicators: {
         "Adult social care": {
            importance: "This indicator is important for monitoring the effectiveness of social care services in meeting the needs of the population, and for identifying areas where additional support may be required to meet the needs of those who are not currently receiving services, all of which can inform policy and resource allocation decisions.",
            base_year: "2020",
            source: "annual survey of domiciliary care provision",
            source_link: "https://www.health-ni.gov.uk/articles/domiciliary-care",
            ci: 1,
            chart_title: "Number of adults receiving social care at home or self-directed support for social care services, as a percentage of the total number of adults needing care",
            y_axis_label: "%",
            data: {
               NI: "INDADSCNI",
               AA: "",
               LGD: "",
               EQ: ""
            },
            improvement: "increase",
            telling: {
               improved: "More adults are getting the care they need.",
               no_change: "The level of adults receiving the care they need is the same.",
               worsened: "Fewer adults are getting the care they need." 
            }
         },
         "Loneliness": {
            importance: "Everyone is likely to experience feelings of loneliness at some point during their lifetime, however, frequent feelings of loneliness can have a serious negative impact, not only on a person’s mental health and wellbeing, but also on their physical health, as frequent loneliness is associated with early death.",
            base_year: "2019/20",
            source: "Continuous Household Survey",
            source_link: "https://www.executiveoffice-ni.gov.uk/topics/statistics-and-research/wellbeing-northern-ireland",
            ci: 1.96,
            chart_title: "Percentage who were lonely 'often/always' or 'some of the time'",
            y_axis_label: "%",
            data: {
               NI: "",
               AA: "INDLONEAA",
               LGD: "INDLONELGD",
               EQ: "INDLONEEQ"
            },
            improvement: "decrease",
            telling: {
               improved: "People are less lonely.",
               no_change: "Loneliness is about the same.",
               worsened: "People are more lonely." 
            }
         },
         "Volunteering": {
            importance: "This indicator provides the proportion of adults in Northern Ireland who volunteer, providing a measure of civic engagement.",
            base_year: "2021/22",
            source: "Continuous Household Survey",
            source_link: "https://www.communities-ni.gov.uk/topics/sport-museums-and-libraries-statistics",
            ci: 2,
            chart_title: "% volunteering",
            y_axis_label: "%",
            data: {
               NI: "",
               AA: "",
               LGD: "INDVOLLGD",
               EQ: "INDVOLEQ"
            },
            improvement: "increase",
            telling: {
               improved: "More adults are volunteering.",
               no_change: "Volunteering remains constant.",
               worsened: "Fewer adults are volunteering." 
            }
         }
       }
    }
 };