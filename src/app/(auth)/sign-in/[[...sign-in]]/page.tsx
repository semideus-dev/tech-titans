import { SignIn as SignInComponent } from "@clerk/nextjs";

export default function SignIn() {
  return (
    <SignInComponent
      appearance={{
        variables: {
          colorBackground: "#08090A",
          colorNeutral: "#f4f4f5",
          colorText: "#f4f4f5",
          colorInputBackground: "#1d1d1d",
          colorPrimary: "#22d3ee",
          colorTextOnPrimaryBackground: "#09090b",
          colorInputText: "#f4f4f5",
        },
        elements: {
          providerIcon__github: {
            filter: "invert(1)",
          },
        },
      }}
    />
  );
}
