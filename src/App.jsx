import { myProjects, mySkills } from './data/data';
import Separator from './components/Separator';
import CvBtn from './components/CvBtn';
import ProjectCard from './components/ProjectCard';
import List from './components/List';
import { MdWhatsapp } from 'react-icons/md';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
function App() {
  // mySkills.map((skill) => console.log(skill));
  return (
    <>
      <main className='container'>
        <article style={{ textAlign: 'center' }}>
          <h1 className='text_shdw' style={{ fontSize: '2rem' }}>
            <span>Hi</span> i'm Sammy Miodownick
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores voluptatem mollitia tempora eius minima, laudantium odio
            doloremque delectus ex magni accusantium in voluptas rem libero
            laboriosam dolor. Eos, eveniet!
          </p>
        </article>

        <Separator />

        <article className='stack_article'>
          <h2 className='text_shdw name'>My Stack</h2>
          <List list={mySkills} />
        </article>

        <Separator />

        <article>
          {/* <h2></h2> */}
          <h2 className='text_shdw name'>My Projects</h2>
          <div className='flex'>
            {myProjects &&
              myProjects.map((project) => <ProjectCard data={project} />)}
          </div>
        </article>

        <Separator />
        <article>
          <h2 className='text_shdw name'>Download my CV </h2>
          <CvBtn />
        </article>
        <Separator />

        <article>
          <h2 className='text_shdw name'>Contact me</h2>
          <ul className='contact_ul'>
            <li className='contact_li'>
              <a
                href="https://wa.me/0527469230?text=Hello!%20I'm%20interested%20in%20your%20services."
                target='_blank'>
                <MdWhatsapp />
              </a>
            </li>
            <li className='contact_li'>
              <a href='mailto:miodowork@gmail.com' target='_blank'>
                <FaGoogle />
              </a>
            </li>
            <li className='contact_li'>
              <a
                href='https://www.linkedin.com/in/s-m-59a16a223/'
                target='_blank'>
                <FaLinkedin />
              </a>
            </li>
            <li className='contact_li'>
              <a href='https://github.com/samw1se97' target='_blank'>
                <FaGithub />
              </a>
            </li>
          </ul>
        </article>
      </main>
    </>
  );
}

export default App;
