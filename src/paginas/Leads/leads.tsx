import { useState } from 'react';
import { NewLeadModal } from '../../components/NovoPainelDeLead/NovoPainelDeLead';
import { LeadsPanel } from "../../components/PainelDeLeads/Painel/PainelLeads"

export const Leads = (): JSX.Element => {
  const [isNewLeadModalOpen, setNewLeadModalOpen] = useState(false);

  return (
    <>
      <LeadsPanel
        onOpenNewLeadModal={()=>setNewLeadModalOpen(true)}
      />
      <NewLeadModal
        isOpen={isNewLeadModalOpen}
        onRequestClose={()=>setNewLeadModalOpen(false)}
      />
    </>
  );
}