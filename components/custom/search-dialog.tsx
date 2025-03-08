"use client";

import React from "react";

import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";

import { Search } from "lucide-react";

import { SearchCommand } from "./search-command";

import { Button } from "../ui/button";

export function SearchDialog() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Search height={17} />
          </Button>
        </DialogTrigger>

        <DialogContent>
          <SearchCommand />
        </DialogContent>
      </Dialog>
    </div>
  );
}
