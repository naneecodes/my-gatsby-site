import React from "react"
import Layout from "../components/layout"
import "./about.css"
import Photo from "../images/photos/about-photo.png"

export default function About() {
  return (
    <Layout>
      <main>
        <div className="about-container">
          <p>
            This is my about page. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Curabitur non sapien gravida, sollicitudin sem sit
            amet, lobortis neque. Proin vitae tortor eu erat finibus
            condimentum. Curabitur sem leo, rutrum id urna ac, porttitor
            fermentum sem. Nunc augue justo, mattis in urna non, cursus ultrices
            urna. Cras a turpis id lacus molestie blandit. Etiam a justo eu
            tortor convallis ullamcorper in sit amet dui. Nam sapien massa,
            porttitor et nisl vitae, maximus condimentum mi. Donec sollicitudin
            in massa vitae volutpat. Nam pharetra, sem nec laoreet suscipit,
            risus est dapibus mauris, vitae pharetra massa metus non mi. Nam sit
            amet elit ultrices, feugiat metus quis, scelerisque dolor. Nullam
            volutpat placerat nibh et accumsan. Maecenas lectus quam, maximus
            aliquet volutpat vitae, pellentesque sit amet diam. Vestibulum
            scelerisque sapien mauris, id tincidunt eros pretium nec. Quisque
            luctus aliquet bibendum. Maecenas vestibulum dui eget sem egestas,
            id dictum turpis pellentesque. Mauris elementum nec nunc et
            bibendum. Vivamus dapibus metus fermentum efficitur dapibus. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Nullam eget commodo metus, non sodales erat.
            Nulla ultrices arcu lorem, in gravida tellus rutrum eu. Proin ac
            ante dui. Donec pretium purus quis nulla vehicula, ac pharetra nisl
            fringilla. Quisque fermentum pharetra justo vitae pellentesque. Nunc
            volutpat sagittis aliquam. Aenean leo arcu, elementum eu rutrum
            eget, congue nec sem.
          </p>
          <img src={Photo} alt="photo" className="photo" />
        </div>
      </main>
    </Layout>
  )
}
