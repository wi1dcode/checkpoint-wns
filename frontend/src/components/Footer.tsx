import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_COUNTRY } from "../graphql/mutations";
import { GET_CONTINENTS } from "../graphql/queries";
import { Continent } from "../types";
import PlusIcon from "@/images/PlusIcon";

const MySwal = withReactContent(Swal);

const Footer: React.FC<{ refetchCountries: () => void }> = ({
  refetchCountries,
}) => {
  const { data: continentData, loading: continentLoading } = useQuery<{
    continents: Continent[];
  }>(GET_CONTINENTS);
  const [addCountryMutation] = useMutation(ADD_COUNTRY);

  const handleAddCountry = () => {
    if (continentLoading) return;

    const continentOptions = continentData?.continents
      .map((continent) => {
        return `<option value="${continent.id}">${continent.name}</option>`;
      })
      .join("");

    MySwal.fire({
      title: "Add Country",
      html:
        '<input id="name" class="swal2-input" placeholder="Name" style="margin-bottom: 10px;">' +
        '<input id="code" class="swal2-input" placeholder="Code" style="margin-bottom: 10px;">' +
        '<input id="emoji" class="swal2-input" placeholder="Emoji" style="margin-bottom: 10px;">' +
        `<select id="continent" class="swal2-input" style="margin-bottom: 10px;">
          <option value="">Select Continent</option>
          ${continentOptions}
        </select>`,
      focusConfirm: false,
      confirmButtonText: "Add",
      confirmButtonColor: "#4CAF50",
      cancelButtonText: "Cancel",
      cancelButtonColor: "#d33",
      showCancelButton: true,
      customClass: {
        popup: "animated fadeInDown",
        confirmButton:
          "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
        cancelButton:
          "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
      },
      preConfirm: () => {
        const name = (document.getElementById("name") as HTMLInputElement)
          .value;
        const code = (document.getElementById("code") as HTMLInputElement)
          .value;
        const emoji = (document.getElementById("emoji") as HTMLInputElement)
          .value;
        const continent = (
          document.getElementById("continent") as HTMLSelectElement
        ).value;
        if (!name || !code || !emoji) {
          MySwal.showValidationMessage("Please enter name, code and emoji");
          return;
        }
        addCountryMutation({
          variables: {
            data: {
              name,
              code,
              emoji,
              continent: continent ? parseInt(continent, 10) : null,
            },
          },
        }).then(() => {
          refetchCountries();
        });
      },
    });
  };

  return (
    <footer className="text-white flex justify-center items-center fixed bottom-0 w-full pb-6">
      <div className="absolute bottom-4 flex justify-center w-full">
        <button
          onClick={handleAddCountry}
          className="bg-pink-500 text-white w-20 h-20 rounded-full flex items-center justify-center transition-transform transform hover:scale-110 active:scale-95"
        >
          <PlusIcon />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
