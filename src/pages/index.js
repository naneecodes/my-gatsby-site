import React from "react"
import Layout from "../components/layout.js"
import "./index.css"

export default function Home() {
  return (
    <Layout>
      <main>
        <div class="intro-container">
          <h1>Hi, I'm Nanee.</h1>
          <h1>I'm an American full-stack developer</h1>
          <h1>living in South Korea.</h1>
        </div>
        <div class="work-container">
          <h2>Projects I've made</h2>
          <div class="projects">
            <div class="project1"></div>
            <div class="project2"></div>
            <div class="project3"></div>
          </div>
        </div>
        <div class="blog-container">
          <h2>Blog Posts</h2>
          <ul class="blog-post-list">
            <li>
              <a class="under-links" href="#">
                <h3>Blog Post Title</h3>
                <p>Subtitle description</p>
              </a>
            </li>
            <li>
              <a class="under-links" href="#">
                <h3>Blog Post Title</h3>
                <p>Subtitle description</p>
              </a>
            </li>
            <li>
              <a class="under-links" href="#">
                <h3>Blog Post Title</h3>
                <p>Subtitle description</p>
              </a>
            </li>
            <li>
              <a class="under-links" href="#">
                <h3>Blog Post Title</h3>
                <p>Subtitle description</p>
              </a>
            </li>
            <li>
              <a class="under-links" href="#">
                <h3>Blog Post Title</h3>
                <p>Subtitle description</p>
              </a>
            </li>
            <li>
              <a class="under-links" href="#">
                <h3>Blog Post Title</h3>
                <p>Subtitle description</p>
              </a>
            </li>
            <li>
              <a class="under-links" href="#">
                <h3>Blog Post Title</h3>
                <p>Subtitle description</p>
              </a>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  )
}
