import Job from "../components/Job";

export default function Employment(){
  return (
    <div className="employment" id="employment-section">
      <header className="header">
        <h1>Employment</h1>
      </header>

      <div className="employment-content">
        <section className="experience" id="resume-section">
          <Job
            title="Developer at OneFeather Mobile Technologies Ltd."
            year="Aug 2022 - Present"
            location="Victoria BC"
            description={[
              "Supported the development and refinement of front and back-end web development using Ruby on Rails, JavaScript, Elixir, Phoenix LiveView, React, and HTML/CSS to build applications to support Indigenous sovereignty in the digital era, such as status card renewal support and digital voting platforms for Nation elections.",
              "Participated in ongoing database management projects, using Postgres, API integration with GraphQL to improve existing data model design and implement new features.",
              "Implemented repeatable automated processes for building and testing applications to correct errors and defects in existing applications.",
              "Collaborated with other teams in and across the organizational agile environment to accomplish goals and ensure sprint requirements were met throughout the lifecycle of the project.",
              "Briefed technical concepts to a non-technical audience as needed to communicate changes and ensure understanding of new features.",
              "Researched appropriate development tools, and collaborated with team members on alternatives and solutions, product evaluation, risk assessment of existing and future applications.",
            ]}
          />
          <Job
            title="Contract Support Agent at OneFeather Mobile Technologies Ltd."
            year="Sept 2021 - May 2022"
            location="Victoria BC"
            description={[
              "Evaluated status card applications using step review process prior to their submission to Indigenous Services Canada, communicating directly with clients as needed to ensure application compliance with federal requirements.",
              "Maintained OneFeather's internal ticketing system of status card applications, ensuring minimal processing times and reduced number of rejected applications.",
            ]}
          />
          <Job
            title="Merchant Success Specialist at Pixel Union"
            year="May 2017 - Dec 2019"
            location="Victoria BC"
            description={[
              "Managed the daily queue of support requests for Pixel Union's Shopify theme owners.",
              "Provided ongoing HTML, CSS, Liquid, and Javascript support to actively help problem solve and complete clients' desired goals in a fast, trustworthy, and reliable manner.",
              "Created and implemented new processes for responding to support requests, resulting in increased efficiency and enhanced customer satisfaction.",
              "Trained and mentored new team members in their customer service roles to improve speed, professionalism, and success ratings.",
            ]}
          />
        </section>
      </div>
    </div>
  );
}
