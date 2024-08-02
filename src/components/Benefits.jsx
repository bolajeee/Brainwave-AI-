import Heading from "./Heading"
import Section from "./Section"
import { benefits } from "../constants"

const Benefits = () => {
  return (
      <Section id="features"
          className="container relative z-2"
      >
          <Heading className="md:max-w-md lg:max-w-2xl"
              title="Chat smarter, not harder with Brainwave" />
          
          <div className="flex flex-wrap-gap-10 mb-10 ">
              {benefits.map((item) => (
                  <div key={item.id}>
                      <div>
                          <h5>{item.title}</h5>
                      </div>
                  </div>
              )) }
          </div>
      </Section>
  )
}

export default Benefits