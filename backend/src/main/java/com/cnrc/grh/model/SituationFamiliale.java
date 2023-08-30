

public enum MaritalStatus {
    MARRIED("Married"),
    DIVORCED("Divorced"),
    SINGLE("Single"),
    WIDOWED("Widowed"),
    // Add more options as needed

    private final String label;

    private MaritalStatus(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }
    }