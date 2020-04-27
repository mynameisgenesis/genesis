import React, {Fragment} from 'react';
import WorkHistory from './WorkHistory/WorkHistory';
import Title from '../../components/Title/Title';

const Resume = () => {
    return(
        <Fragment>
            <Title classes={"highlight"}>Work History</Title>
            <WorkHistory jobTitle="Computer Programmer" company="Aeva Specialty Pharmacy">
                <ul>
                    <li>Using the 2019 Microsoft Visual Studio development tool, performed programming in .Net Core and C#.</li>
                    <li>Developed ER Diagrams to design the data models.</li>
                    <li>Wrote SQL statements queries embedded within C# and also performed several database operations.</li>
                    <li>Creating a .NET Core MVC web application for new and existing patient prescription tracking that is hosted on a HIPAA compliant server.</li>
                    <li>Created users roles to allow users to view different menu items. Worked on IIS to configure websites.</li>
                    <li>Setup and Configured System Environment.</li>
                    <li>Managed and responsible for environment migration.</li>
                    <li>Added SSL Certificate to IIS Website.</li>
                    <li>Published .NET Core project as a working website.</li> 
                    <li>Undertaking complete ownership of self-assigned tasks and managing</li>
                    <li>own priorities and allocating appropriate time will little supervision.</li>
                    <li>Using Entity Framework (EF) Code First. WordPress Website Development and Setup.</li>
                    <li>SQL and MySQL database maintenance and development.</li>
                    <li>Integrating Google API.</li>
                    <li>Troubleshooting Computer Software and Hardware Issues.</li>
                </ul>
            </WorkHistory>
            <WorkHistory jobTitle="Jr. Web Administrator" company="Anderson Business Advisors">
                <li>Keeping all of the companies WordPress sites up-to-date, as well as plugins.</li>
                <li>Creating staging copies for each website (about 20+).</li>
                <li>Purchasing any domain or server space that may be needed on behalf of the company.</li>
                <li>Responding to any issues regarding Website downtime, updating text and images, etc.</li>
                <li>Making forms using Formstack, Gravity Forms, FormAssembly and integrating the with WordPress and SalesForce.</li>
                <li>Writing custom Javascript code to fill in specific fields on a form using UTM parameters in the URL link given to clients.</li>
                <li>Creation of any website requested using WordPress whether it be using software to install or manually.</li>
                <li>Setting up SSO(Single Sign On) for every website.</li>
                <li>Adding every domain to our Analytics accounts to keep track of incoming traffic.</li>
                <li>Ability to set up a local server to test WordPress websites.</li>
                <li>Optimizing blog posts and web pages for search engines to increase traffic.</li>
                <li>Used Git.</li>
                <li>Manage technical integration with third party services</li>
                <li>Monitor uptime, hosting, and databases to ensure site is performing at maximum capacity.</li>
                <li>Prepare business and technical documentation</li>
                <li>Utilizing JavaScript frameworks to implement website functionality.</li>
            </WorkHistory>
            <WorkHistory jobTitle="Estimator / Personal Assistant" company="LED Connection">
                <li>Assisting co-workers with any technical difficulties experienced using the computers.</li>
                <li>Utilizing and managing data in on Excel Spreadsheets using formulas and macros.</li>
                <li>Preparing estimates for electrical contractors.</li>
                <li>Creating the light fixture specification sheets.</li>
                <li>Managing the company’s email; creating new ones if needed Making deliveries of product to customers.</li>
                <li>Contacting the appropriate lighting distributors or manufacturers to either purchase or request quotes from.</li>
                <li>Creating delivery tickets.</li>
                <li>Filing physical and digital files daily and keeping them organized.</li>
                <li>Filing, sorting and organizing company folders.</li>
            </WorkHistory>
        </Fragment>

    );
}

export default Resume;