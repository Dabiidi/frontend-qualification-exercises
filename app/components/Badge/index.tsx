import { CheckCircleIcon, InfoIcon, InfoOutlineIcon, NotAllowedIcon } from "@chakra-ui/icons";
import { Badge, Icon } from "@chakra-ui/react";

interface BadgeProps {
  $VerificationStatus?: string;
  $status?: string;
}
const BadgeComponent: React.FC<BadgeProps> = ({
  $VerificationStatus,
  $status,
}) => {
  let colorScheme = "green";
  let badgeContent = "Verified";
  let variant = "outlined";
  let icon = null;

  const CircleIcon = (props: any) => (
    <Icon viewBox="0 0 200 200" {...props}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );

  if ($VerificationStatus === "VERIFIED") {
    colorScheme = "green";
    badgeContent = "Verified";
    variant = "outline";
    icon = <CircleIcon boxSize={2} marginRight={1} marginBottom={1} />;
  } else if ($VerificationStatus === "UNVERIFIED") {
    colorScheme = "red";
    badgeContent = "Unverified";
    variant = "outline";
    icon = <CircleIcon boxSize={2} marginRight={1} marginBottom={1} />;
  } else if ($VerificationStatus === "PENDING") {
    colorScheme = "orange";
    badgeContent = "Pending";
    variant = "outline";
    icon = <CircleIcon boxSize={2} marginRight={1} marginBottom={1} />;
  }

  if ($status === "ACTIVE") {
    colorScheme = "green";
    badgeContent = "Active";
    variant = "solid";
    icon = <CheckCircleIcon marginRight={1} marginBottom={1} />;
  } else if ($status === "BLACKLISTED") {
    colorScheme = "orange";
    badgeContent = "Blacklisted";
    variant = "solid";
    icon = <InfoOutlineIcon marginRight={1} marginBottom={1} />;
  } else if ($status === "DISABLED") {
    colorScheme = "gray";
    badgeContent = "Disabled";
    variant = "solid";
    icon = <NotAllowedIcon marginRight={1} marginBottom={1} />;

  }

  return (
    <Badge
      variant={variant}
      height={"22px"}
      fontSize={"12px"}
      lineHeight={"18px"}
      fontWeight={"500"}
      alignItems="center"
      justifyContent="center"
      colorScheme={colorScheme}
      borderRadius={15}
      padding={"2px 10px"}
    >
      {icon}

      {badgeContent}
    </Badge>
  );
};

export default BadgeComponent;
