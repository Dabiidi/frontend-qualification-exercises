import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Container,
  Text,
  Box,
  Flex,
  Button,
  Select,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";

import { useQuery } from "@apollo/client";
import { GET_MEMBERS } from "@/app/lib/apolloClient";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { formatDateTime } from "@/app/helper/dateFormat";

import theme, { thStyle } from "../../theme/index";
import ChakraDropdown from "../Dropdown";
import BadgeComponent from "../Badge";
import { MembersData } from "./table-data.interface";

export default function TableMemberComponent() {
  const headers = [
    "Name",
    "Verification Status",
    "Email address",
    "Mobile Numbers",
    "Domain",
    "Date Registered",
    "Status",
    "Date and Time Last Active",
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const { loading, data, fetchMore } = useQuery<MembersData>(GET_MEMBERS, {
    variables: {
      filter: null,
    },
  });

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const hasNextPage = data?.members?.pageInfo?.hasNextPage;

  const handlePageSizeChange = (e: { target: { value: string } }) => {
    setPageSize(parseInt(e.target.value));
  };

  const nextPage = () => {
    if (hasNextPage) {
      fetchMore({
        variables: {
          first: null,
          after: data?.members.pageInfo.endCursor,
          filter: null,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return {
            ...prev,
            members: {
              ...fetchMoreResult.members,
              edges: fetchMoreResult.members.edges,
            },
          };
        },
      });
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      fetchMore({
        variables: {
          last: pageSize,
          after: data?.members.pageInfo.startCursor,
          filter: null,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return {
            ...prev,
            members: {
              ...fetchMoreResult.members,
              edges: fetchMoreResult.members.edges,
            },
          };
        },
      }).then(() => setCurrentPage((prevPage) => prevPage - 1));
    }
  };

  return (
    <Container maxW={"1,376px"} padding={"28px"}>
      <Text fontWeight={500} fontSize={32}>
        Members
      </Text>
      <Text
        color={theme.colors.neutrals[500]}
        marginBottom={"14px"}
        fontSize={16}
      >
        View your members here.
      </Text>
      <Box
        borderWidth={1}
        borderColor={theme.colors.tableBorderColor}
        backgroundColor={theme.colors.tableColor}
        borderRadius={"8px"}
        padding={"5px"}
      >
        <Flex
          alignItems="center"
          borderTopRightRadius={"8px"}
          borderTopLeftRadius={"8px"}
          padding={"2px 20px"}
          backgroundColor={theme.colors.headerColor}
        >
          <Box>
            <Text color={theme.colors.neutralWhite} fontSize={16}>
              Filters
            </Text>
          </Box>
          <Box w="1px" h="32px" bg={theme.colors.neutralWhite} mx={1} />
          <Flex flexWrap="nowrap" gap={12} padding={"16px 14px"}>
            {headers.map((header) => {
              let options: string[] = [];
              switch (header) {
                case "Name":
                  options =
                    data?.members.edges.map((edge) => edge.node.name) || [];
                  break;
                case "Verification Status":
                  options =
                    data?.members.edges.map(
                      (edge) => edge.node.verificationStatus
                    ) || [];
                  break;
                case "Email address":
                  options =
                    data?.members.edges.map((edge) => edge.node.emailAddress) ||
                    [];
                  break;
                case "Mobile Numbers":
                  options =
                    data?.members.edges.map((edge) => edge.node.mobileNumber) ||
                    [];
                  break;
                case "Domain":
                  options =
                    data?.members.edges.map((edge) => edge.node.domain) || [];
                  break;
                case "Date Registered":
                  options =
                    data?.members.edges.map((edge) =>
                      formatDateTime(edge.node.dateTimeCreated)
                    ) || [];
                  break;
                case "Status":
                  options =
                    data?.members.edges.map((edge) => edge.node.status) || [];
                  break;
                case "Date and Time Last Active":
                  options =
                    data?.members.edges.map((edge) =>
                      formatDateTime(edge.node.dateTimeLastActive)
                    ) || [];
                  break;
                default:
                  break;
              }
              return (
                <ChakraDropdown
                  key={header}
                  $dropdownName={header}
                  $options={options}
                  onOptionSelect={handleOptionSelect}
                />
              );
            })}
          </Flex>
        </Flex>
        {loading ? (
          <Flex justifyContent="center" my={4}>
            <Spinner size="lg" color="blue.500" />
          </Flex>
        ) : (
          <Table
            variant={"unstyled"}
            borderWidth={1}
            borderColor={theme.colors.tableBorderColor}
            size="xl"
          >
            <Thead
              backgroundColor={theme.colors.headerColor}
              color={theme.colors.fonts[100]}
            >
              <Tr>
                <Th {...thStyle}>Name</Th>
                <Th {...thStyle}>Verification Status</Th>
                <Th {...thStyle}>Balance</Th>
                <Th {...thStyle}>Email address</Th>
                <Th {...thStyle}>Mobile Numbers</Th>
                <Th {...thStyle}>Domain</Th>
                <Th {...thStyle}>Date Registered</Th>
                <Th {...thStyle}>Status</Th>
              </Tr>
            </Thead>
            <Tbody borderColor={theme.colors.neutrals[800]}>
              {data?.members?.edges.map((edge, index) => (
                <Tr key={edge.node.id} borderColor={theme.colors.neutrals[800]}>
                  <Td color={theme.colors.dropdown.listColor} p={4}>
                    {edge.node.name}
                  </Td>
                  <Td p={4}>
                    <BadgeComponent
                      $VerificationStatus={edge.node.verificationStatus}
                    />
                  </Td>
                  <Td p={4}>{edge.node.wallet.balance}</Td>
                  <Td p={4}>{edge.node.emailAddress}</Td>
                  <Td p={4}>{edge.node.mobileNumber}</Td>
                  <Td p={4}>{edge.node.domain}</Td>
                  <Td p={4}>{formatDateTime(edge.node.dateTimeCreated)}</Td>

                  <Td p={4}>
                    <BadgeComponent $status={edge.node.status} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
        <Flex justifyContent="flex-end" gap={5} marginTop="1rem">
          <Flex alignItems="center" justifyContent="space-between">
            <Select
              value={pageSize}
              backgroundColor={theme.colors.dropdown.background}
              borderColor={theme.colors.neutrals[800]}
              onChange={handlePageSizeChange}
            >
              <option
                style={{ backgroundColor: theme.colors.dropdown.background }}
                value={10}
              >
                10 Entries
              </option>
              <option
                style={{ backgroundColor: theme.colors.dropdown.background }}
                value={20}
              >
                20 Entries
              </option>
              <option
                style={{ backgroundColor: theme.colors.dropdown.background }}
                value={30}
              >
                30 Entries
              </option>
            </Select>
          </Flex>
          <Flex
            borderWidth={"1px"}
            borderRadius={"8px"}
            padding={"0 4px"}
            borderColor={theme.colors.neutrals[800]}
            width={"1,376px"}
          >
            <Button
              backgroundColor={theme.colors.dropdown.background}
              onClick={prevPage}
              disabled={currentPage === 1}
              color={theme.colors.neutralWhite}
            >
              <ArrowBackIcon
                boxSize={6}
                marginRight={2}
                color={theme.colors.neutralWhite}
              />
              Previous
            </Button>
            <Box w="0.1px" h="40px" bg={theme.colors.neutrals[800]} mx={1} />

            <Button
              backgroundColor={theme.colors.dropdown.background}
              onClick={nextPage}
              justifyContent={"space-between"}
              disabled={!hasNextPage}
              color={theme.colors.neutralWhite}
            >
              Next
              <ArrowForwardIcon
                boxSize={6}
                marginLeft={2}
                color={theme.colors.neutralWhite}
              />
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}
