import { useParams } from "react-router-dom"

export default function About() {
  const {slug} = useParams()
  return (
    <div>About {slug}</div>
  )
}
