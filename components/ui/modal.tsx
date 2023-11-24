"use client";

import React from 'react'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface IModal {
    isOpen: boolean;
    title: string;
    description: string;
    onClose: () => void;
    children?: React.ReactNode;
}

const Modal: React.FC<IModal> = ({isOpen, onClose, title, description , children}) => {
    const onChange = (open: boolean) => {
        if(!open) {
            onClose();
        }
    }

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    {title}
                </DialogTitle>
                <DialogDescription>
                    {description}
                </DialogDescription>
            </DialogHeader>
            <div>
                {children}
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default Modal