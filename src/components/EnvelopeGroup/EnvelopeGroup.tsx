import { Accordion } from "../Accordion";
import { Envelope } from "../Envelope";

// import classes from "./style.module.css";
import { EnvelopeProps } from "./types";

export const EnvelopeGroup = ({ title, ids }: EnvelopeProps) => (
  <Accordion summary={title} isOpen>
    {ids.map((id) => (
      <Envelope key={id} id={id} />
    ))}
  </Accordion>
);
