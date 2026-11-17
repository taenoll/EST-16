
import BackLink from "../components/BackLink";
import NoteForm from "../components/NoteForm";
import { ROUTES } from "../routes";

interface Props {
  onChangeRoute: (nextRoute: string, pickNoteId: number) => void;
}

function NoteCreatePage({ onChangeRoute }: Props) {

  const handleBackLink = () => onChangeRoute(ROUTES.list, 0);

  return (
    <div className="NoteCreatePage">
      <BackLink onChangeRoute={handleBackLink} />
      <NoteForm />
    </div>
  );
}

export default NoteCreatePage;
