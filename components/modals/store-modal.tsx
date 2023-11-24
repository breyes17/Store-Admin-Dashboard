"use client";

import React from 'react'

import Modal from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';

function StoreModal() {
    const storeModal = useStoreModal();
    
  return (
    <Modal title='New Store' description='Add a new store or a category' isOpen={storeModal.isOpen} onClose={storeModal.onClose}>
        Store modal here
    </Modal>
  )
}

export default StoreModal